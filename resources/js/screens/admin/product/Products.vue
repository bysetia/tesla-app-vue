<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-center">
                        Image
                    </th>
                    <th class="text-center">
                        Name
                    </th>
                    <th class="text-center">
                        Category Name
                    </th>
                    <th class="text-center">
                        Price
                    </th>
                    <th class="text-center">
                        Edit
                    </th>
                    <th class="text-center">
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td class="text-center">
                        <div v-if="product.image">
                            <img
                                :src="url + '/products/' + product.image"
                                style="height:100px;width:100px"
                                alt=""
                            />
                        </div>
                        <div v-else>
                            <img
                                class="pt-2"
                                src="https://www.logocentral.info/wp-content/uploads/2020/04/Tesla-Logo-640X590.jpg"
                                style="height:100px;width:100px"
                                alt=""
                            />
                        </div>
                    </td>
                    <td class="text-center">{{ product.name }}</td>
                    <td class="text-center">{{ product.category.name }}</td>
                    <td class="text-center">{{ product.price }}</td>
                    <td class="text-center">
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            large
                            color="cyan"
                            v-on:click="
                                () =>
                                    $router.push({
                                        name: 'EditProduct',
                                        params: { product }
                                    })
                            "
                        >
                            <font-awesome-icon icon="pen" />
                        </v-btn>
                    </td>
                    <td class="text-center">
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            large
                            color="red"
                            v-on:click="deleteProduct(product.id)"
                        >
                            <font-awesome-icon icon="trash" />
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    data: function() {
        return {
            products: [],
            url: window.location.origin
        };
    },
    methods: {
        getProducts() {
            axios.get("api/products").then(response => {
                if (response.status >= 200 && response.status < 300) {
                    this.products = response.data.products;
                }
            });
        },

        deleteProduct(id) {
            axios.get("api/delete/product/" + id).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    this.getProducts();
                    alert(response.data.message);
                }
            });
        }
    },
    mounted() {
        this.getProducts();
    }
};
</script>

<style></style>
