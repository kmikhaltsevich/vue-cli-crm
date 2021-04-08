import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import tooltipDirective from '@/directives/tooltip.directive'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.directive('tooltip', tooltipDirective)
Vue.filter('date', dateFilter)

const firebaseConfig = {
  apiKey: "AIzaSyAl3ueTbbbDjirFkSD-WRQ6EIYM0szzRak",
  authDomain: "vue-crm-km.firebaseapp.com",
  projectId: "vue-crm-km",
  storageBucket: "vue-crm-km.appspot.com",
  messagingSenderId: "39689576116",
  appId: "1:39689576116:web:75bec65d2f9af1b98c41e1"
}
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

