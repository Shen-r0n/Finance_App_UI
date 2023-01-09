import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Vue from 'vue' ;

import { IonicVue } from '@ionic/vue';


//font awesome dependencies  
/* import the fontawesome core */

import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */


import { faHatWizard, faTrash } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



import store from '@/store/index';


// global css
import './theme/global.css';

/* Theme variables */
import './theme/variables.css';

/* add icons to the library */

library.add(faHatWizard, faTrash);


const app = createApp(App)
  .use(IonicVue)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .use(store);
  
router.isReady().then(() => {
  app.mount('#app');
});