import 'vant/lib/index.css'
import { createApp } from 'vue';
import Vant from 'vant'
import {Toast} from "vant";
import {Icon} from "vant";
import router from "@/router";
import store from "@/store";
import App from '@/App/index.vue'
const app = createApp(App);
app.use(Vant);
app.use(router)
app.use(store)
app.use(Toast)
app.use(Icon)
app.mount('#app'); //挂载