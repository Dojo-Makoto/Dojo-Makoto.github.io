document.addEventListener("alpine:init", () => {
    Alpine.data("buttondown", () => ({
        success: false,
        error: false,
        loading: false,
        currentState: "success",
        message: "",
        email: "",
        init() {
            this.currentState = "idle";

            this.$watch("loading", (value) => {
                if (value) {
                    this.currentState = "loading";
                }
            });

            this.$watch("success", (value) => {
                if (value) {
                    this.currentState = "success";
                }
            });

            this.$watch("error", (value) => {
                if (value) {
                    this.currentState = "error";
                }
            });

            this.$watch("email", () => {
                this.error = false;
                this.currentState = "idle";
            });
        },

        async submitForm() {
            this.success = false;
            this.error = false;
            this.loading = true;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (
                !this.email ||
                this.email.length === 0 ||
                !emailRegex.test(this.email)
            ) {
                this.error = true;
                this.message = "Please enter a valid email address.";
                this.loading = false;
                return;
            }

            try {
                const response = await fetch(
                    "https://rwsignup.devant.io/v1/signup",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email: this.email }),
                    }
                );

                const result = await response.json();

                if (response.ok) {
                    this.success = true;
                    this.message = "Thanks for signing up! 🎉";
                } else {
                    this.error = true;
                    if (result.code === "email_already_exists") {
                        this.message =
                            "You've already signed up with this email, please check your inbox for the confirmation email.";
                    } else {
                        this.message = `Signup Error! ${result.detail}`;
                    }
                }
            } catch (error) {
                this.error = true;
                this.message =
                    "There was an error with your signup. Please try again.";
            } finally {
                this.loading = false;
            }
        },
    }));
});
