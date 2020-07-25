import Vue from 'vue'
import App from './App.vue'

import pkButton from './components/Button.vue'
import pkDialog from './components/Dialog.vue'
import pkInput from './components/Input.vue'
import pkSwitch from './components/Switch.vue'

Vue.config.productionTip = false

Vue.component(pkButton.name, pkButton)
Vue.component(pkDialog.name, pkDialog)
Vue.component(pkInput.name, pkInput)
Vue.component(pkSwitch.name, pkSwitch)

new Vue({
  render: h => h(App)
}).$mount('#app')
