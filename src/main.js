import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Home from './components/views/Home.vue'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')

//Vue.use(Router)
