<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Home</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="transaction" href="/tabs/transaction">
          <ion-icon :icon="swapHorizontalOutline"></ion-icon>
          <ion-label>Transaction</ion-label>
          <ion-badge>2</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="card" href="/tabs/card">
          <ion-icon :icon="cardOutline"></ion-icon>
          <ion-label>Card</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon :icon="settingsOutline"> </ion-icon>
          <ion-label>Settings</ion-label>
          <ion-badge>1</ion-badge>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  homeOutline,
  swapHorizontalOutline,
  cardOutline,
  settingsOutline,
} from "ionicons/icons";

import {
  IonPage,
  IonIcon,
  IonTabs,
  IonLabel,
  IonTabButton,
  IonBadge,
  IonRouterOutlet,
  IonTabBar,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonIcon,
    IonTabs,
    IonLabel,
    IonTabButton,
    IonBadge,
    IonRouterOutlet,
    IonTabBar,
  },
  setup() {
    return {
      homeOutline,
      swapHorizontalOutline,
      cardOutline,
      settingsOutline,
    };
  },
});
</script>

<style>

ion-tabs {
  background: var(--ion-color-secondary);
  /* background: white */;
  
  
}

ion-tab-bar{
    /* background: var(--ion-color-secondary); */
  position: relative;
  width: 90%;
  transform: translate(-50%, -50%);
  left: 50%;
  border-radius: 20px;
  padding-bottom: 0;
  border: 1px solid rgba(255, 250, 250, 0.88);
  overflow: hidden;
  box-shadow: 0px -5px 10px rgb(3 181 170 / 8%);
  height: 60px;
  /* background: var(--icon-color-light); */
  
}
</style>
