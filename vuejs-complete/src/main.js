import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase',function(value) {
  return value.toLowerCase();
})
Vue.mixin({
  created() {
    console.log('Global mixin - Created Hook.');
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')