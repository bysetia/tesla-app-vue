import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routes'
import index from './index'
import vuetify from './vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash, faCamera, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import coreState from './coreState'

library.add(faPen, faTrash, faCamera, faSignOutAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.use(VueRouter)

require('./bootstrap');

window.Vue = require('vue').default;

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {       
        index
    },
    vuetify,
    store: coreState
});
