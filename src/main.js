import Vue from 'vue'
import App from './App.vue'
import services from './services/_index'

Vue.config.productionTip = false

//Global logic methods
Vue.use({
  install(Vue){
    Object.defineProperty(Vue.prototype, '$services',{
      value: services
    })
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
