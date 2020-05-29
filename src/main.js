import Vue from 'vue'
import App from './App'

new Vue({
    el: '#app',
    render: h => h(App) //Arrow function tem um return implicito
}) //.$mount("#app") funciona da mesma forma que o el: '#app'