import 'vant/lib/index.css'
import { createApp } from 'vue';
import Vant from 'vant'
import router from "@/router";
import App from '@/App/index.vue'
const app = createApp(App);
app.use(Vant).use(router).mount('#app'); //挂载