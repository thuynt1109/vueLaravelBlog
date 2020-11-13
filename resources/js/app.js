require('./bootstrap');
window.Vue = require('vue');

// import Vue from 'vue';

// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import {routes} from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue'));
//Vue.component('admin-main', require('./components/admin/AdminMaster.vue'));


const routes =[
    { path: '/foo', component:Foo },
    { path: '/bar', component: Bar}
]

const router = VueRouter({
    routes
})


const app = new Vue({
    el: '#app',
    router
});
