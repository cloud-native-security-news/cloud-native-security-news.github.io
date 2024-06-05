import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import {router} from "./router";
import './global.css'
// import './assets/style/green.css'
// import './assets/style/pink.css'
import 'ant-design-vue/dist/reset.css';
import "highlight.js/styles/github-dark.css";
const app = createApp(App);
app.use(router);
router.isReady().then(
    () => app.use(Antd).mount('#app')
)
