import 'material-design-icons-iconfont/dist/material-design-icons.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import moment from 'moment'
// import bootstrap from 'bootstrap'

import App from './App'
import router from './router'
import store from '@/store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

sync(store, router)

Vue.use(Vuetify, {
  icons: 'mdi'
})

Vue.prototype.$moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
