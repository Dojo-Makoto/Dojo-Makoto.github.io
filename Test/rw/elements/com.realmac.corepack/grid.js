document.addEventListener("alpine:init", () => {
    Alpine.data(
        "grid",
        (animations = null, duration = 300, delay = 0, threshold = 0.9) => ({
            animations,
            duration,
            delay,
            threshold,

            lastAnimationTime: 0,

            init() {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry, index) => {
                            if (entry.isIntersecting) {
                                setTimeout(() => {
                                    this.animations.from.forEach(
                                        (fromClass) => {
                                            entry.target.classList.remove(
                                                fromClass
                                            );
                                        }
                                    );
                                    this.animations.to.forEach((toClass) => {
                                        entry.target.classList.add(toClass);
                                    });
                                }, this.delay);
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    {
                        threshold: this.threshold,
                    }
                );

                this.$el
                    .querySelectorAll('[data-component-title="GridItem"]')
                    .forEach((gridItem) => {
                        gridItem.style.transitionDuration = `${this.duration}ms`;

                        this.animations.from.forEach((fromClass) => {
                            gridItem.classList.add(fromClass);
                        });
                        observer.observe(gridItem);
                    });
            },
        })
    );
});
