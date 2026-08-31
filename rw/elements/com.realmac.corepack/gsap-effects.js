// Fade Up In Effect
gsap.registerEffect({
    name: "fadeUpIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            {
                autoAlpha: 0,
                y: config.distance,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Fade Up Out Effect
gsap.registerEffect({
    name: "fadeUpOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { autoAlpha: 1, y: 0 },
            {
                autoAlpha: 0,
                y: config.distance,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Fade Down In Effect
gsap.registerEffect({
    name: "fadeDownIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { autoAlpha: 0, y: `-${config.distance}` },
            {
                autoAlpha: 1,
                y: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Fade Down Out Effect
gsap.registerEffect({
    name: "fadeDownOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { autoAlpha: 1, y: 0 },
            {
                autoAlpha: 0,
                y: `-${config.distance}`,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

gsap.registerEffect({
    name: "fadeLeftIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { autoAlpha: 0, x: `${config.distance}` },
            {
                autoAlpha: 1,
                x: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Fade Left Out Effect
gsap.registerEffect({
    name: "fadeLeftOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { autoAlpha: 1, x: 0 },
            {
                autoAlpha: 0,
                x: `${config.distance}`,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Fade Right In Effect
gsap.registerEffect({
    name: "fadeRightIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { autoAlpha: 0, x: `-${config.distance}` },
            {
                autoAlpha: 1,
                x: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Fade Right Out Effect
gsap.registerEffect({
    name: "fadeRightOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { autoAlpha: 1, x: 0 },
            {
                autoAlpha: 0,
                x: `-${config.distance}`,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Up In Effect
gsap.registerEffect({
    name: "slideUpIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { 
                y: config.distance,
                autoAlpha: 1
            },
            {
                y: 0,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Up Out Effect
gsap.registerEffect({
    name: "slideUpOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { y: 0, autoAlpha: 1 },
            {
                y: config.distance,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Down In Effect
gsap.registerEffect({
    name: "slideDownIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { y: `-${config.distance}`, autoAlpha: 1 },
            {
                y: 0,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Down Out Effect
gsap.registerEffect({
    name: "slideDownOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { y: 0, autoAlpha: 1 },
            {
                y: `-${config.distance}`,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Left In Effect
gsap.registerEffect({
    name: "slideLeftIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { x: config.distance, autoAlpha: 1 },
            {
                x: 0,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Left Out Effect
gsap.registerEffect({
    name: "slideLeftOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { x: 0, autoAlpha: 1 },
            {
                x: config.distance,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Right In Effect
gsap.registerEffect({
    name: "slideRightIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { x: `-${config.distance}`, autoAlpha: 1 },
            {
                x: 0,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Slide Right Out Effect
gsap.registerEffect({
    name: "slideRightOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { x: 0, autoAlpha: 1 },
            {
                x: `-${config.distance}`,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Up In Effect
gsap.registerEffect({
    name: "zoomUpIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { scale: 0, autoAlpha: 0, y: config.distance },
            {
                scale: 1,
                autoAlpha: 1,
                y: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Up Out Effect
gsap.registerEffect({
    name: "zoomUpOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { scale: 1, autoAlpha: 1, y: 0 },
            {
                scale: 0,
                y: config.distance,
                autoAlpha: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Down Out Effect
gsap.registerEffect({
    name: "zoomDownOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { scale: 1, autoAlpha: 1, y: 0 },
            {
                scale: 0,
                y: `-${config.distance}`,
                autoAlpha: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Down In Effect
gsap.registerEffect({
    name: "zoomDownIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { scale: 0, autoAlpha: 0, y: `-${config.distance}` },
            {
                scale: 1,
                autoAlpha: 1,
                y: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Left In Effect
gsap.registerEffect({
    name: "zoomRightIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { 
                scale: 0, 
                x: `-${config.distance}`,
                autoAlpha: 0 
            },
            {
                scale: 1,
                x: 0,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Left Out Effect
gsap.registerEffect({
    name: "zoomRightOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { 
                scale: 1, 
                x: 0,
                autoAlpha: 1 
            },
            {
                scale: 0,
                x: `-${config.distance}`,
                autoAlpha: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Right In Effect
gsap.registerEffect({
    name: "zoomLeftIn",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { 
                scale: 0, 
                x: config.distance,
                autoAlpha: 0 
            },
            {
                scale: 1,
                x: 0,
                autoAlpha: 1,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

// Scale Right Out Effect
gsap.registerEffect({
    name: "zoomLeftOut",
    effect: (targets, config) => {
        return gsap.fromTo(
            targets,
            { 
                scale: 1, 
                x: 0,
                autoAlpha: 1 
            },
            {
                scale: 0,
                x: config.distance,
                autoAlpha: 0,
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "power1.out", distance: "200px" },
});

gsap.registerEffect({
    name: "lightSpeedLeftIn",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    x: config.distance, 
                    skewX: -30, 
                    autoAlpha: 0 
                },
                "60%": { 
                    skewX: 20, 
                    autoAlpha: 1 
                },
                "80%": { 
                    skewX: -5 
                },
                "100%": { 
                    x: 0, 
                    skewX: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut" },
});

gsap.registerEffect({
    name: "lightSpeedLeftOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    autoAlpha: 1 
                },
                "100%": { 
                    x: config.distance, 
                    skewX: 30, 
                    autoAlpha: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn" },
});

gsap.registerEffect({
    name: "lightSpeedRightIn",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    x: `-${config.distance}`, 
                    skewX: 30,
                    autoAlpha: 0 
                },
                "60%": { 
                    skewX: -20, 
                    autoAlpha: 1 
                },
                "80%": { 
                    skewX: 5,
                },
                "100%": { 
                    x: 0, 
                    skewX: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut", distance: "200px" },
});

gsap.registerEffect({
    name: "lightSpeedRightOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    autoAlpha: 1 
                },
                "100%": { 
                    x: `-${config.distance}`, 
                    skewX: -30, 
                    autoAlpha: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn", distance: "200px" },
});

gsap.registerEffect({
    name: "lightSpeedUpIn",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    y: config.distance, 
                    skewY: -30, 
                    autoAlpha: 0 
                },
                "60%": { 
                    skewY: 20
                },
                "80%": { 
                    skewY: -5,
                    autoAlpha: 1 
                },
                "100%": { 
                    y: 0, 
                    skewY: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut", distance: "200px" },
});

gsap.registerEffect({
    name: "lightSpeedUpOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    autoAlpha: 1 
                },
                "100%": { 
                    y: config.distance, 
                    skewY: 30, 
                    autoAlpha: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn", distance: "200px" },
});

gsap.registerEffect({
    name: "lightSpeedDownIn",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    y: `-${config.distance}`, 
                    skewY: 30, 
                    autoAlpha: 0 
                },
                "60%": { 
                    skewY: -20, 
                    autoAlpha: 1 
                },
                "80%": { 
                    skewY: 5,
                },
                "100%": { 
                    y: 0, 
                    skewY: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut", distance: "200px" },
});

gsap.registerEffect({
    name: "lightSpeedDownOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    autoAlpha: 1 
                },
                "100%": { 
                    y: `-${config.distance}`, 
                    skewY: -30, 
                    autoAlpha: 0 
                },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn", distance: "200px" },
});

gsap.registerEffect({
    name: "rotateUpIn",
    effect: (targets, config) => {
        return gsap.fromTo(targets, 
            {
                autoAlpha: 0, 
                y: config.distance, 
                rotation: -config.degrees
            },
            {
                autoAlpha: 1, 
                y: 0, 
                rotation: 0, 
                ease: config.ease, 
                duration: config.duration, 
                delay: config.delay,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut", distance: "200px", degrees: "90" },
});

gsap.registerEffect({
    name: "rotateDownIn",
    effect: (targets, config) => {
        return gsap.fromTo(targets, 
            {
                autoAlpha: 0, 
                y: `-${config.distance}`, 
                rotation: config.degrees
            },
            {
                autoAlpha: 1, 
                y: 0, 
                rotation: 0, 
                ease: config.ease, 
                duration: config.duration, 
                delay: config.delay,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut", distance: "200px", degrees: "90" },
});

gsap.registerEffect({
    name: "rotateRightIn",
    effect: (targets, config) => {
        return gsap.fromTo(targets, 
            {
                autoAlpha: 0, 
                x: `-${config.distance}`, 
                rotation: config.degrees
            },
            {
                autoAlpha: 1, 
                x: 0, 
                rotation: 0, 
                ease: config.ease, 
                duration: config.duration, 
                delay: config.delay,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut", distance: "200px", degrees: "90" },
});

gsap.registerEffect({
    name: "rotateLeftIn",
    effect: (targets, config) => {
        return gsap.fromTo(targets, 
            {
                autoAlpha: 0, 
                x: config.distance, 
                rotation: config.degrees
            },
            {
                autoAlpha: 1, 
                x: 0, 
                rotation: 0, 
                ease: config.ease, 
                duration: config.duration, 
                delay: config.delay,
                scrollTrigger: config.scrollTrigger,
                clearProps: config.clearProps || "auto",
                onComplete: config.onComplete,
            }
        );
    },
    defaults: { duration: 1, delay: 0, ease: "easeOut", distance: "200px", degrees: "90" },
});

gsap.registerEffect({
    name: "rotateUpOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            autoAlpha: 0, 
            y: -config.distance, 
            rotation: config.degreesOut, 
            ease: config.ease, 
            duration: config.duration, 
            delay: config.delay,
            scrollTrigger: config.scrollTrigger
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn", distance: "200px", degreesOut: -90 },
});

gsap.registerEffect({
    name: "rotateDownOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            autoAlpha: 0, 
            y: config.distance, 
            rotation: config.degreesOut, 
            ease: config.ease, 
            duration: config.duration, 
            delay: config.delay,
            scrollTrigger: config.scrollTrigger
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn", distance: "200px", degreesOut: -90 },
});

gsap.registerEffect({
    name: "rotateRightOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            autoAlpha: 0, 
            x: `-${config.distance}`, 
            rotation: config.degreesOut, 
            ease: config.ease, 
            duration: config.duration, 
            delay: config.delay,
            scrollTrigger: config.scrollTrigger
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn", distance: "200px", degreesOut: -90 },
});

gsap.registerEffect({
    name: "rotateLeftOut",
    effect: (targets, config) => {
        return gsap.to(targets, {
            autoAlpha: 0, 
            x: config.distance, 
            rotation: config.degreesOut, 
            ease: config.ease, 
            duration: config.duration, 
            delay: config.delay,
            scrollTrigger: config.scrollTrigger
        });
    },
    defaults: { duration: 1, delay: 0, ease: "easeIn", distance: "200px", degreesOut: -90 },
});

gsap.registerEffect({
    name: "bounceInDown",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { 
                    autoAlpha: 0, 
                    y: -3000, 
                    scaleY: 3,
                    scaleX: 1
                },
                "60%": { 
                    autoAlpha: 1, 
                    y: 25, 
                    scaleY: 0.9,
                    scaleX: 1
                },
                "75%": { 
                    y: -10, 
                    scaleY: 0.95,
                    scaleX: 1
                },
                "90%": { 
                    y: 5, 
                    scaleY: 0.985,
                    scaleX: 1
                },
                "100%": { 
                    y: 0, 
                    scaleY: 1,
                    scaleX: 1
                },
            },
            ease: config.ease, // No overall easing for the keyframe block
            duration: config.duration, // Configurable total duration
            delay: config.delay,
            scrollTrigger: config.scrollTrigger, // Optional scrollTrigger integration
        });
    },
    defaults: { duration: 1.5, delay: 0, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }, // Default total duration
});

gsap.registerEffect({
    name: "swing",
    effect: (targets, config) => {
        return gsap.to(targets, {
            keyframes: {
                "0%": { autoAlpha: 0 },
                "20%": { transform: "rotate3d(0, 0, 1, 15deg)", autoAlpha: 1 },
                "40%": { transform: "rotate3d(0, 0, 1, -10deg)" },
                "60%": { transform: "rotate3d(0, 0, 1, 5deg)" },
                "80%": { transform: "rotate3d(0, 0, 1, -5deg)" },
                "100%": { transform: "rotate3d(0, 0, 1, 0deg)" },
            },
            ease: config.ease,
            duration: config.duration,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
        });
    },
    defaults: { duration: 1, delay: 0, ease: "linear" },
});