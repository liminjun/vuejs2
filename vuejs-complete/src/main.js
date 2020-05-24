import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase')

new Vue({
  render: h => h(App),
}).$mount('#app')