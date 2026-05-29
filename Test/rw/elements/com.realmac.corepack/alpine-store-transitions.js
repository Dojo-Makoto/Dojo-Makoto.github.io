document.addEventListener('alpine:init', () => {
    Alpine.store('transitions', {
        // Simple transform presets
        transforms: {
            dim: {
                remove: false,
                duration: 300,
                properties: {
                    'opacity': '0.25'
                }
            },
            zoomOut: {
                remove: true,
                duration: 1000,
                properties: {
                    'opacity': '0',
                    'scale-x': '1.5',
                    'scale-y': '1.5'
                }
            },
            slide: {
                remove: true,
                duration: 1000,
                properties: {
                    'translate-y': '30%',
                    'opacity': '0',
                }
            }
            // Add more as needed
        },

        // Return a plain object, not a proxy
        getTransform(name) {
            const transform = this.transforms[name];
            return transform ? { ...transform } : {};
        }
    });
}); 