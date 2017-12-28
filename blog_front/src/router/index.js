import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import article_left from "../components/article/article_left.vue"

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: "/class",
      component: article_left
    },
    {
        path: "/class",
        name: "article_left",
        component: article_left
    }
  ]
})
