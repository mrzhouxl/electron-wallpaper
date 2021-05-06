import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './views/index'
import sencery from './views/wallpaper/scenery'
import comic from './views/wallpaper/comic'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
      children: [{
        path: '/scenery',
        component: sencery
      }, {
        path: '/comic',
        component: comic
      }]
    }
  ]
})