import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '/test',
          name: 'test',
          component: Test
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
})
