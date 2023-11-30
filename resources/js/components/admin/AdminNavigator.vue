<template>
  <div>
    <v-toolbar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >

      <v-toolbar-title>Tesla AP</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="mr-2" @click="() => this.$router.push('addCategory')">
          Add Category
      </v-btn>
      <v-btn @click="() => this.$router.push('categories')">
          Categories
      </v-btn>
      <v-btn class="ml-2" @click="() => this.$router.push('products')">
          Products
      </v-btn>
      <v-btn class="ml-2" @click="() => this.$router.push('addProduct')">
          Add Product
      </v-btn>
      <v-btn class="mx-2" fab dark medium color="red" v-on:click="logout()">
        <font-awesome-icon icon="sign-out-alt" style="font-size:25px"></font-awesome-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import Vue from 'vue';
import EventBus from '../../eventbus';
export default {
  methods: {
    logout() {
      axios.post('admin/logout').then(response => {
        if(response.status >= 200 && response.status < 300) {
          EventBus.$emit('authCheck')
          this.$router.push({name: 'Login'})
        }
      })
    }
  },
}
</script>

<style>

</style>