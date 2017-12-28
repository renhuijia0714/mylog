import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login"
import Mange from "../components/Mange"
import Add from "../components/nav1/Add"
import List from "../components/nav1/List"
import One from "../components/nav2/One"
import Two from "../components/nav2/Two"
import Class_list from "../components/nav2/Class_list"
import AddApi from "../components/nav3/AddApi"
import BackApi from "../components/nav3/BackApi"
import FrontApi from "../components/nav3/BackApi"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mange',
      name: 'Mange',
      component: Mange,
      children: [
        {
          path: "/mange/addArtcle",
          name: "Add",
          component: Add
        },
        {
          path: "/mange/artList",
          name: "List",
          component: List
        },
        {
          path: "/mange/one",
          name: "One",
          component: One
        },
        {
          path: "/mange/two",
          name: "Two",
          component: Two
        },
        {
          path: "/mange/listClass",
          name: "Class_list",
          component: Class_list
        },
        {
          path: "/mange/addApi",
          name: "AddApi",
          component: AddApi
        },
        {
          path: "/mange/backApi",
          name: "BackApi",
          component: BackApi
        },
        {
          path: "/mange/frontApi",
          name: "FrontApi",
          component: FrontApi
        }
      ]
    }
  ]
})
