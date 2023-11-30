<template>
    <div>
        <v-container fluid class="promo">
            <v-content>
                <div class="text-center" style="margin-top:13%">
                    <h1 class="display-2">
                        Go Electric
                    </h1>
                    <h1 class="display-1">
                        Save The Planet
                    </h1>
                </div>
            </v-content>
        </v-container>
        <v-container
            style="background-color:black;margin-top:-10px;"
            fill-width
            fluid
        >
            <v-layout row>
                <v-flex
                    xs12
                    class="text-xs-center display-1 white--text font-weight-black ma-10"
                >
                    Specifications
                </v-flex>
            </v-layout>
            <v-row style="margin-top:60px">
                <v-col cols="6">
                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="10">
                            <v-img
                                width="100%"
                                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/287c75d3-2f5d-481e-8a0f-0dc987f54e6b/bvlatuR/std/1040x584/MX-Interior-Grid-A-Desktop"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6" class="white--text" style="align-self:center">
                    <div class="ml-4" style="width:36%">
                        <span style="font-size:23px" class="mb-2">
                            Wireless Gaming
                        </span>
                        <br />
                        <span>
                            Up to 10 teraflops of processing power enables
                            in-car gaming on-par with today’s newest consoles.
                            Wireless controller compatibility lets you game from
                            any seat.
                        </span>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" class="white--text" style="align-self:center">
                    <v-row justify="end">
                        <div class="mb-2 mr-4" style="width:36%">
                            <span style="font-size:23px">
                                Stay Connected
                            </span>
                            <br />
                            <span>
                                Multi-device Bluetooth, wireless and USB-C
                                charging for every passenger, with enough power
                                to fast-charge your tablets and laptop.
                            </span>
                        </div>
                    </v-row>
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col cols="10">
                            <v-img
                                width="100%"
                                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/a7e9b42b-3433-4ad3-9d25-8995c8b750f4/bvlatuR/std/1040x584/MX-Interior-Grid-B-Desktop"
                            ></v-img>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="10">
                            <v-img
                                width="100%"
                                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2e30e61-96ae-4e0a-813d-fa39f35c5797/bvlatuR/std/1040x584/MX-Interior-Grid-C-Desktop"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6" class="white--text" style="align-self:center">
                    <div class="ml-4" style="width:36%">
                        <span style="font-size:23px" class="mb-2">
                            Your Best Audio System
                        </span>
                        <br />
                        <span>
                            A 22-speaker, 960-watt audio system with active
                            noise canceling offers the best listening experience
                            at home or on the road.
                        </span>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-img
            style="width:100%;"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2ddb3f38-d056-43cc-8e35-c849e7817ded/bvlatuR/std/2880x1800/MX-Interior-Hero-Desktop"
        ></v-img>
        <div style="background-color:black;margin-top:-10px">
            <div fluid class="background" style="display:table">
                <div
                    style="display:table-cell;vertical-align:bottom;padding-bottom:50px"
                >
                    <v-row>
                        <v-col>
                            <h1
                                class="white--text font-weight-light text-right"
                            >
                                1020hp
                            </h1>
                            <p class="white--text text-right">Peak Power</p>
                        </v-col>
                        <v-col>
                            <h1
                                class="white--text font-weight-light text-center"
                            >
                                9.9s
                            </h1>
                            <p class="white--text text-center">1/4 mile</p>
                        </v-col>
                        <v-col>
                            <h1 class="white--text font-weight-light">
                                2.5s
                            </h1>
                            <p class="white--text">0-60 mph*</p>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
        <div style="background-color:black;margin-top:-10px">
            <div class="text-left pt-3">
                <v-row>
                    <img
                        style="height:600px"
                        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3d7892b2-7246-42e5-819a-cc119ede91b7/bvlatuR/std/1440x1080/MX-Specs-Hero-Desktop"
                    />
                    <v-layout align-center>
                        <h1 class="white--text">Tesla Model X</h1>
                        <v-btn style="border-radius:18px;" class="ml-3"
                            >Order Now</v-btn
                        >
                    </v-layout>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
     .promo {
        background: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop');
        background-size: cover;
        width:100%;
        height:100vh;
    }

    .background {
        background: url('/assets/tesla-specs.jpeg');
        background-size:cover;
        width: 100%;
        height:70vh;
    }
</style>
