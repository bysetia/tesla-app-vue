<template>
    <div style="background-color:white;height:100vh">
        <v-container>
            <p class="display-3 font-weight-light text-center pa-4">SHOPPING CART</p>
            <v-row>
                <v-col :cols="12" md="9" sm="12">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">ITEM</th>
                                    <th class="text-left">ITEM NAME</th>
                                    <th class="text-left">ITEM PRICE</th>
                                    <th class="text-left">REMOVE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in $store.getters.getCartItems" :key="item.id">
                                    <td>
                                        <v-img style="height:80px;width:80px" class="mt-2" :src="'/products/'+item.image"></v-img>
                                    </td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.price }}</td>
                                    <td><v-btn class="white--text" color="black" @click="() => removeItemFromCart(item)">X</v-btn></td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
                <v-col :cols="12" md="3" sm="12" style="background-color:black;border-radius:7px">
                    <p class="headline white--text">Order Summary</p>
                    <p class="overline white--text">
                        The total costs for your order.
                    </p>
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                                <tr>
                                    <td>Order Subtotal</td>
                                    <td class="text-right" style="width:50px">Total Price</td>
                                </tr>
                                <tr v-for="item in $store.getters.getCartItems" :key="item.id">
                                    <td>
                                        {{ item.name }}
                                    </td>
                                    <td class="text-right" style="width:50px">{{ item.price }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <div class="text-center">
                        <v-btn class="white mt-5" outlined>PROCEED TO PAY</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    methods: {
        removeItemFromCart(item) {
            this.$store.dispatch('removeItemFromCart', item)
        }
    }
}
</script>

<style>

</style>