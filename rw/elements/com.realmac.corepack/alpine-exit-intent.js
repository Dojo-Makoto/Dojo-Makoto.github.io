// alpine.plugins.js
document.addEventListener("alpine:init", () => {
    const createExitHandler = (callback) => {
        const onMouseLeave = (e) => e.clientY <= 0 && callback();
        const html = document.documentElement;
        html.addEventListener("mouseleave", onMouseLeave);
        return () => html.removeEventListener("mouseleave", onMouseLeave);
    };

    Alpine.directive("exit-intent", (el, { expression }, { evaluateLater }) => {
        const handler = evaluateLater(expression);
        el._x_exitIntentCleanup = createExitHandler(handler);
    });

    Alpine.magic("exitIntent", () => createExitHandler);
});

document.addEventListener("alpine:clean", (e) => {
    e.target._x_exitIntentCleanup?.();
});
