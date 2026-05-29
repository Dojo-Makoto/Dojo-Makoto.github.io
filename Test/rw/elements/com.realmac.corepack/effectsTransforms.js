document.addEventListener("alpine:init", () => {
    Alpine.data("effectsTransforms", (element) => ({
        element,
        isActive: false,

        init() {
            if (typeof element !== "string" || element.trim() === "") {
                console.warn(
                    "Invalid element identifier. Expected a non-empty string."
                );
                return;
            }

            const layer =
                element === "self"
                    ? this.$el
                    : this.$el.closest(`.group\\/${element}`);

            layer?.addEventListener("click", () => {
                this.isActive = !this.isActive;
            });
        },

        item: {
            ["x-bind:class"]() {
                const { from, to } = this.$el.dataset;
                return {
                    [from]: !this.isActive,
                    [to]: this.isActive,
                };
            },
        },
    }));
});
