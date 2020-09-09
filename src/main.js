import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 引入 vant 组件
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: (h) => h(App),
}).$mount('#app')
