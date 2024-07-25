import 'vant/lib/index.css'
import { createApp } from 'vue';
import adminLogin from './App/adminLogin.vue';
import Vant from 'vant'
const app = createApp(adminLogin);
app.use(Vant).mount('#app'); //挂载