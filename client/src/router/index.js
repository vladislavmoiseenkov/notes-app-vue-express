import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Notes from '@/pages/Notes'
import Note from '@/pages/Note'
import ViewNote from '@/pages/ViewNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/note/:id/edit',
      name: 'edit-note',
      component: Note
    },
    {
      path: '/note/create',
      name: 'create-note',
      component: Note
    },
    {
      path: '/note/:id',
      name: 'view-note',
      component: ViewNote
    }
  ]
})
