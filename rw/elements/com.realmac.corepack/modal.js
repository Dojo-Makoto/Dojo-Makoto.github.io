document.addEventListener("alpine:init", () => {
    Alpine.data("modal", (id) => ({
        open: false,
        id,

        init() {
            this.$watch("open", (value) => {
                if (value) {
                    document.body.classList.add("overflow-hidden");
                } else {
                    document.body.classList.remove("overflow-hidden");
                }
            });
        },

        onEscape() {
            this.open = false;
        },

        wrapper: {
            ["x-ref"]() {
                return "wrapper";
            },
            ["@open-panel.window"](e) {
                this.open = e.detail === this.id;
                alert(e.detail);
            },
            ["x-show"]() {
                return this.open;
            },
        },

        trigger: {
            ["@click.prevent"]() {
                this.open = true;
            },
        },

        panel: {
            ["x-show"]() {
                return this.open;
            },
            ["x-ref"]() {
                return "panel";
            },
            ["@click.away"]() {
                this.open = false;
            },
        },
    }));
});
