<template>
    <div
        class="pa-0"
        style="max-height: 100vh; overflow: hidden; background-color: white; height: 100vh"
    >
        <v-img src="/assets/roadster.jpeg" height="350px" width="100vw"></v-img>
        <v-card
            class="mx-auto elevation-5 text-center pa-5"
            max-width="350"
            style="border-radius: 20px; position: relative; top: -100px"
        >
            <v-card-subtitle class="title black--text pa-1">
                Login Now
            </v-card-subtitle>
            <v-card-subtitle class="pa-1"></v-card-subtitle>
            <v-text-field
                hide-details
                color="black"
                label="Email"
                v-model="form.email"
            ></v-text-field>
            <v-text-field
                color="black"
                label="Password"
                v-model="form.password"
                type="password"
            ></v-text-field>
            <v-card-actions>
                <v-btn color="black" dark block rounded @click="handleLogin"
                    >Login</v-btn
                >
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import EventBus from "../../eventbus";
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
                device_name: "browser"
            }
        };
    },

    methods: {
        handleLogin() {
            // Dapatkan CSRF cookie
            axios
                .get("/sanctum/csrf-cookie")
                .then(() => {
                    // Kirim permintaan login
                    axios
                        .post("admin/login", this.form)
                        .then(response => {
                            // Dapatkan data pengguna setelah login
                            axios
                                .get("api/user")
                                .then(userResponse => {
                                    if (
                                        userResponse.status >= 200 &&
                                        userResponse.status < 300
                                    ) {
                                        // Periksa kecocokan email untuk otentikasi
                                        if (
                                            this.form.email ===
                                            userResponse.data.email
                                        ) {
                                            // Emit event untuk authCheck
                                            EventBus.$emit("authCheck");
                                            // Redirect ke halaman kategori admin setelah login berhasil
                                            this.$router.push(
                                                "/admin/categories"
                                            );
                                        }
                                    }
                                })
                                .catch(error => {
                                    // Tangani kesalahan saat mendapatkan data pengguna
                                    console.error(
                                        "Error fetching user data:",
                                        error
                                    );
                                });
                        })
                        .catch(error => {
                            // Tangani kesalahan saat login
                            console.error("Login error:", error);
                        });
                })
                .catch(error => {
                    // Tangani kesalahan saat mendapatkan CSRF cookie
                    console.error("CSRF cookie error:", error);
                });
        }
    }
};
</script>

<style></style>
