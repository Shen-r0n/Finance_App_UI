import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

import store from '@/store/index';


// global css
import './theme/global.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);
  
router.isReady().then(() => {
  app.mount('#app');
});