<template>
   <span>
      <v-toolbar color="black" dark>
        <v-toolbar-title>
          <router-link to='/home'>
            <v-img src="/assets/tesla.png" height="110px" width="200px"></v-img>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down white font-weight-bold black--text" @click="() => this.$router.push({name: 'Shop'})">Shop</v-btn>
        <v-btn class="hidden-sm-and-down white font-weight-bold black--text ml-3" @click="() => this.$router.push({name: 'Cart'})">Cart</v-btn>
      </v-toolbar>
  </span>
</template>

<script>
export default {

}
</script>

<style>

</style>