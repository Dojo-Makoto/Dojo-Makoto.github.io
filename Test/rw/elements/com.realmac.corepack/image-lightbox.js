document.addEventListener("alpine:init", () => {
    Alpine.data("imageLightbox", (id) => ({
        id,
        open: false,
        init() {
            const handlers = {
                keydown: (e) => e.key === "Escape" && (this.open = false),
                "image-lightbox-toggle": () => (this.open = !this.open),
                "image-lightbox-close": () => (this.open = false),
                "image-lightbox-open": () => (this.open = true),
            };

            Object.entries(handlers).forEach(([event, handler]) => {
                (event === "keydown" ? document : window).addEventListener(
                    event,
                    (e) => {
                        if (event === "keydown" || e.detail.id === this.id) {
                            handler(e);
                        }
                    }
                );
            });
        },
    }));
});
