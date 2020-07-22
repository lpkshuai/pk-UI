import Vue from 'vue'
import App from './App.vue'

import pkButton from './components/Button.vue'

Vue.config.productionTip = false

Vue.component(pkButton.name, pkButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
