import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';


//font awesome dependencies  
/* import the fontawesome core */

import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */


import { 
  faHatWizard,
  faTrash,
  faHouse,
  faPaperPlane,
  faFileInvoiceDollar,
  faSquareUpRight,
  faFastForward,
} from '@fortawesome/free-solid-svg-icons';

import {faAngry} from '@fortawesome/free-regular-svg-icons'
 
/* import font awesome icon component */

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



import store from '@/store/index';


// global css
import './theme/global.css';

/* Theme variables */
import './theme/variables.css';
import { 
  faDiscord,
   faFacebook,
    faTwitch,
     faTwitter
 } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */

library.add(
  faHatWizard,
   faTrash,
   faHouse,
   faAngry, 
   faDiscord, 
   faTwitch, 
   faTwitter, 
   faFacebook, 
   faPaperPlane, 
   faFileInvoiceDollar,
  faSquareUpRight,
  faFastForward

   );


const app = createApp(App)
  .use(IonicVue)
  // .component("fa", FontAwesomeIcon)
  .use(router)
  .use(store);

  app.component('font-awesome-icon',FontAwesomeIcon)
  
router.isReady().then(() => {
  app.mount('#app');
});