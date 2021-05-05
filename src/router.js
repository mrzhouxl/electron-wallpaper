import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './views/index'
import sencery from './views/wallpaper/scenery'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:index,
      children:[{
        path:'/scenery',
        component:sencery
      }]
    }
  ]
})