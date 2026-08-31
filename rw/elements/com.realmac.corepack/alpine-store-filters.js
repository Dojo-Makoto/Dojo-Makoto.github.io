document.addEventListener('alpine:init', () => {
    function stripDiacritics(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    Alpine.store('filters', {
        lists: {},
        filteredLists: {},
        observers: {},  // Store observers by listId
        transformProperties: [
            '--tw-translate-x',
            '--tw-translate-y',
            '--tw-rotate',
            '--tw-skew-x',
            '--tw-skew-y',
            '--tw-scale-x',
            '--tw-scale-y',
            '--tw-opacity'
        ],
        
        // Helper method for deep merging objects
        mergeOptions(target, source) {
            Object.keys(source).forEach(key => {
                if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    this.mergeOptions(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            });
            return target;
        },

        // Initialize a new list with default options
        createList() {
            return {
                q: '',
                tags: new Set(),
                activeTags: new Set(),
                options: {},
            };
        },

        registerList(listId, options = {}) {
            if (!listId) {
                console.error('No listId provided');
                return;
            };

            if (this.lists[listId]) {
                this.mergeOptions(this.lists[listId].options, options);
                return;
            }

            this.lists[listId] = this.createList();
            this.mergeOptions(this.lists[listId].options, options);

            this.addItemsToList(listId);

            this.observers[listId] = new MutationObserver((mutations) => {
                let needsUpdate = false;
                
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1 && node.matches(`[data-filter-group="${listId}"]`)) {
                            this.addItemToList(listId, node);
                            needsUpdate = true;
                        }
                    });
                });

                if (needsUpdate) {
                    this.filterList(listId);
                    this.setTags(listId);
                }
            });

            this.observers[listId].observe(document.body, {
                childList: true,
                subtree: true
            });
        },

        // Helper to create a consistent item object
        createItem(element) {
            return {
                element,
                text: stripDiacritics((element.textContent || '').toLowerCase().trim()),
                tags: element.getAttribute('data-filter-tags')?.split(',').map(t => t.trim()) || [],
                transitionName: element.getAttribute('data-filter-transition') || null,
                visible: true
            };
        },

        addItemToList(listId, element) {
            if (!this.filteredLists[listId]) {
                this.filteredLists[listId] = [];
            }

            this.filteredLists[listId].push(this.createItem(element));
            this.setTags(listId);
            this.filterList(listId);
        },

        addItemsToList(listId) {
            const elements = document.querySelectorAll(`[data-filter-group="${listId}"]`);
            
            this.filteredLists[listId] = Array.from(elements).map(element => 
                this.createItem(element)
            );

            this.filterList(listId);
            this.setTags(listId);
        },

        unregisterList(listId) {
            if (this.observers[listId]) {
                this.observers[listId].disconnect();
                delete this.observers[listId];
            }
            delete this.lists[listId];
            delete this.filteredLists[listId];
        },

        updateQuery(listId, query) {
            if (this.lists[listId]) {
                this.lists[listId].q = query;
                this.filterList(listId);
            }
        },

        setTags(listId) {
            if (!this.filteredLists[listId]) {
                console.error('No filtered list found for listId:', listId);
                return;
            };

            this.lists[listId].tags = new Set(
                this.filteredLists[listId]
                    .reduce((tags, item) => {
                        if (Array.isArray(item.tags)) {
                            item.tags.forEach(tag => {
                                if (tag?.trim()) tags.add(tag.toLowerCase());
                            });
                        }
                        return tags;
                    }, new Set())
            );
        },

        getTags(listId) {
            const list = this.lists[listId];
            return list?.tags ? Array.from(list.tags).sort() : [];
        },

        toggleTag(listId, tag) {
            const list = this.lists[listId];
            if (!list) return;

            const selectionMode = list.options?.tags?.mode || 'multiple';
            const activeTags = list.activeTags;
            const tagLower = tag.toLowerCase();

            if (selectionMode === 'single') {
                // For single mode, clear other tags and toggle the current one
                if (activeTags.has(tagLower)) {
                    activeTags.clear();
                } else {
                    activeTags.clear();
                    activeTags.add(tagLower);
                }
            } else {
                // For multiple mode, just toggle the current tag
                activeTags.has(tagLower) 
                    ? activeTags.delete(tagLower) 
                    : activeTags.add(tagLower);
            }

            this.filterList(listId);
        },

        isActiveTag(listId, tag) {
            const list = this.lists[listId];
            if (!list?.activeTags) return false;
            
            return list.activeTags.has(tag?.toLowerCase?.() || tag);
        },

        transition(element, isVisible) {
            const transition = Alpine.store('transitions').getTransform(element.getAttribute('data-filter-transition'));

            const hasOpacity = /(?:^|\s)opacity-\d+(?:\s|$)/.test(element.className);
            if (!hasOpacity) {
                element.style.setProperty('opacity', 'var(--tw-opacity)');
            }

            if (!isVisible) {
                element.style.display = '';
                
                Object.entries(transition?.properties || {}).forEach(([key, value]) => {
                    element.style.setProperty(`--tw-${key}`, value);
                });

                if (transition.remove) {
                    element.addEventListener('transitionend', () => {
                        element.style.display = 'none';
                    }, { once: true });
                }
            } else {
                element.style.display = '';
                
                element.offsetHeight;
                
                Object.entries(transition?.properties || {}).forEach(([key, value]) => {
                    element.style.setProperty(`--tw-${key}`, null);
                });
            }
        },

        filterList(listId) {
            if (!this.filteredLists[listId]) return;
            
            this.filteredLists[listId].forEach(item => {
                const isVisible = this.matches(listId, item);

                if (item.visible !== isVisible) {
                    this.transition(item.element, isVisible, this.lists[listId].transition);
                    item.visible = isVisible;
                }
            });
        },

        matches(listId, item) {
            const list = this.lists[listId];
            if (!list || !item) return false;

            const { q = '', activeTags = new Set() } = list;
            const tagMatchMode = list.options?.tags?.match || 'any';
            const itemText = (item.text || '').toLowerCase();
            const searchTerms = stripDiacritics(q.toLowerCase().trim());
            
            const matchesSearch = !searchTerms || itemText.includes(searchTerms);
            
            if (!activeTags.size) return matchesSearch;
            
            if (!Array.isArray(item.tags)) return false;
            
            const itemTagsLower = item.tags.map(tag => 
                stripDiacritics(tag?.toLowerCase() || '')
            ).filter(Boolean);
            
            const activeTagsNormalized = new Set(
                Array.from(activeTags).map(t => stripDiacritics(t))
            );
            
            const matchesTags = tagMatchMode === 'all'
                ? Array.from(activeTagsNormalized).every(activeTag => 
                    itemTagsLower.includes(activeTag)
                  )
                : itemTagsLower.some(tag => activeTagsNormalized.has(tag));
            
            return matchesSearch && matchesTags;
        }
    });
});