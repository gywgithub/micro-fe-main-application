import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      // component: () => import('./views/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('./components/HelloWorld.vue')
    },
    {
      path: '/hellotwo', 
      name: 'HelloTwo',
      component: () => import('./components/Hello2.vue')
    },
    {
      path: '/vue-app',
      name: 'VueApp',
      children: [
        {
          path: '',
          name: 'HomePage',
        },
        {
          path: '/table1',
          name: 'TableOne',
        }
      ]
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
