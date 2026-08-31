document.addEventListener("alpine:init", () => {
    Alpine.data(
        "particle",
        (
            speed = 0.1,
            amount = 100,
            maxOpacity = 80,
            fillColor = "fill-white",
            size = "size-4"
        ) => ({
            particles: [],
            svgTemplates: [],
            initialized: false,
            init() {
                if (!this.initialized) {
                    const templateContent =
                        document.getElementById("particle-template").content;
                    this.svgTemplates = Array.from(
                        templateContent.querySelectorAll("svg")
                    );
                    this.createParticles();
                    this.animateParticles();
                    window.addEventListener(
                        "resize",
                        this.throttle(this.resetParticles.bind(this), 100)
                    );
                    this.initialized = true;
                }
            },
            createParticles() {
                for (let i = 0; i < amount; i++) {
                    const particleElement = this.createSVGParticle();
                    this.resetParticle(particleElement);
                    this.$el.appendChild(particleElement);
                    this.particles.push(particleElement);
                }
            },
            createSVGParticle() {
                const randomSVG =
                    this.svgTemplates[
                        Math.floor(Math.random() * this.svgTemplates.length)
                    ];
                const clone = randomSVG.cloneNode(true);
                clone.classList.add(fillColor, size);
                const particle = document.createElement("div");
                particle.classList.add("particle");
                particle.appendChild(clone);
                return particle;
            },
            animateParticles() {
                this.particles.forEach((particle) =>
                    this.moveParticle(particle)
                );
                requestAnimationFrame(this.animateParticles.bind(this));
            },
            resetParticle(particle) {
                const size = Math.random() * 4 + 2;
                const translateX = `${Math.random() * window.innerWidth}px`;
                const translateY = `${Math.random() * window.innerHeight}px`;
                const translateZ = `${Math.random() * 200 - 100}px`;
                const scale = 1 + parseFloat(translateZ) / 200;
                const opacity =
                    (Math.random() * 0.5 + 0.5) * (maxOpacity / 100);
                const glowFilter = this.calculateGlowFilter(
                    parseFloat(translateZ)
                );

                particle.style.setProperty("--opacity", opacity);
                particle.style.setProperty("--translateX", translateX);
                particle.style.setProperty("--translateY", translateY);
                particle.style.setProperty("--translateZ", translateZ);
                particle.style.setProperty("--scale", scale);
                particle.style.setProperty("--glow-filter", glowFilter);

                const svg = particle.querySelector("svg");
                svg.setAttribute("width", `${size}px`);
                svg.setAttribute("height", `${size}px`);

                particle.dataset.targetX = parseFloat(translateX);
                particle.dataset.targetY = parseFloat(translateY);
                particle.dataset.targetZ = parseFloat(translateZ);
            },
            resetParticles() {
                this.particles.forEach((particle) =>
                    this.resetParticle(particle)
                );
            },
            moveParticle(particle) {
                const currentX = parseFloat(
                    particle.style.getPropertyValue("--translateX")
                );
                const currentY = parseFloat(
                    particle.style.getPropertyValue("--translateY")
                );
                const currentZ = parseFloat(
                    particle.style.getPropertyValue("--translateZ")
                );
                let { targetX, targetY, targetZ } = particle.dataset;

                const dx = targetX - currentX;
                const dy = targetY - currentY;
                const dz = targetZ - currentZ;

                const distance = Math.hypot(dx, dy, dz);

                if (distance < 10) {
                    targetX = Math.random() * window.innerWidth;
                    targetY = Math.random() * window.innerHeight;
                    targetZ = Math.random() * 200 - 100;

                    Object.assign(particle.dataset, {
                        targetX,
                        targetY,
                        targetZ,
                    });
                }

                if (distance > 0) {
                    const stepX = (dx / distance) * speed;
                    const stepY = (dy / distance) * speed;
                    const stepZ = (dz / distance) * speed;

                    const newX = currentX + stepX;
                    const newY = currentY + stepY;
                    const newZ = currentZ + stepZ;
                    const scale = 1 + newZ / 200;

                    const glowFilter = this.calculateGlowFilter(newZ);

                    particle.style.setProperty("--translateX", `${newX}px`);
                    particle.style.setProperty("--translateY", `${newY}px`);
                    particle.style.setProperty("--translateZ", `${newZ}px`);
                    particle.style.setProperty("--scale", scale);
                    particle.style.setProperty("--glow-filter", glowFilter);
                    particle.style.transform = `translate3d(var(--translateX), var(--translateY), var(--translateZ)) scale(var(--scale))`;
                }
            },
            calculateGlowFilter(z) {
                const minZ = -100,
                    maxZ = 100,
                    minGlow = 5,
                    maxGlow = 20;
                const glowSize =
                    ((z - minZ) / (maxZ - minZ)) * (maxGlow - minGlow) +
                    minGlow;
                return `drop-shadow(0 0 ${glowSize}px rgba(255, 255, 255, 0.2))`;
            },
            throttle(callback, delay) {
                let lastCall = 0;
                return function (...args) {
                    const now = new Date().getTime();
                    if (now - lastCall < delay) return;
                    lastCall = now;
                    return callback(...args);
                };
            },
        })
    );
});
