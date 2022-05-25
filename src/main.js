import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from './router'


const app = createApp().use(router);
app.config.productionTip = false;


createApp(App).use(router).use(Antd).mount('#app')
