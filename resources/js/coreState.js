import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state: {
        cartItems: []
    },
    mutations: {
        addItemToCart(state, payload) {
            let cartItems = state.cartItems
            cartItems.push(payload)
            state.cartItems = cartItems
        },
        removeItemFromCart(state, payload) {
            let itemToBeRemoved = payload
            state.cartItems = state.cartItems.filter((item) => itemToBeRemoved.id !== item.id)
        }
    },
    getters: {
        getCartItems(state) {
            return state.cartItems
        }
    },
    actions: {
        addItemToCart(state, payload) {
            state.commit('addItemToCart', payload)
        },
        removeItemFromCart(state, payload) {
            state.commit('removeItemFromCart', payload)
        }
    },
    modules: {

    }
})
