import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { request } from 'https';

Vue.use(VueResource)
//рут для адреса сервера
Vue.http.options.root = 'http://localhost:3000/'
//интерсептор который работает для всех уходящих запросов и добавляет токен в хэдер
Vue.http.interceptors.push(request=>{
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

new Vue({
  el: '#app',
  render: h => h(App)
})
