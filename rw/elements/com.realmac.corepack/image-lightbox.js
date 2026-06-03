document.addEventListener("alpine:init", () => {
    Alpine.data("imageLightbox", (id) => ({
        id,
        open: false,
        src: "",
        srcDark: null,
        alt: "",
        init() {
            const handlers = {
                keydown: (e) => e.key === "Escape" && (this.open = false),
                "image-lightbox-toggle": () => (this.open = !this.open),
                "image-lightbox-close": () => (this.open = false),
                "image-lightbox-open": (e) => {
                    this.src = e.detail.src || "";
                    this.srcDark = e.detail.srcDark || null;
                    this.alt = e.detail.alt || "";
                    this.open = true;
                },
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
