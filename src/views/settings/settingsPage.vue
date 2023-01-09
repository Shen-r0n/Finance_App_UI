<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar color="secondary">
        <ion-title> Settings </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="secondary">
      <div align="center">
        <ion-avatar>
          <img src="https://www.svgrepo.com/show/29870/avatar.svg" />
        </ion-avatar>
        <ion-label color="primary">Shenron Crest</ion-label>
      </div>

      <ion-list>
        <ion-item lines="full">
          <ion-icon slot="start" :icon="notificationsOutline"></ion-icon>

          <ion-label> Push Notifications </ion-label>
          <ion-toggle slot="end" :checked="true"></ion-toggle>
        </ion-item>
        <ion-item lines="full">
          <ion-icon slot="start" :icon="fingerPrintOutline"></ion-icon>
          <ion-label> Touch ID Lock </ion-label>
          <ion-toggle slot="end" :checked="true"></ion-toggle>
        </ion-item>
        <ion-item lines="full" detail>
          <ion-icon slot="start" :icon="keyOutline"></ion-icon>
          <ion-label> Change Password </ion-label>
        </ion-item>
        <ion-item lines="full" detail>
          <ion-icon slot="start" :icon="helpBuoyOutline"></ion-icon>
          <ion-label> Get Support </ion-label>
        </ion-item>
      </ion-list>

      <ion-button
        fill="clear"
        class="ion-margin button-lowercase"
        color="danger"
      >
        <ion-icon :icon="logOut" slot="start"></ion-icon>LogOut
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonContent,
  IonAvatar,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonToggle,
  IonButton,
} from "@ionic/vue";

import {
  homeOutline,
  notificationsOutline,
  fingerPrintOutline,
  keyOutline,
  helpBuoyOutline,
  logOut,
} from "ionicons/icons";

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonAvatar,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    IonToggle,
    IonButton,
  },

  setup() {
    return {
      homeOutline,
      notificationsOutline,
      fingerPrintOutline,
      keyOutline,
      helpBuoyOutline,
      logOut,
    };
  },
});
</script>

<style lang="scss" scoped>
ion-content {
  div {
    margin-top: 2rem;
    ion-avatar {
      border-radius: 505;
      border: 1px solid var(--ion-color-tertiary);
      height: 4.5rem;
      width: 4.5rem;
    }
    ion-label {
      display: block;
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      margin-top: 0.6rem;
    }
  }

  ion-list {
    background: transparent;
    padding: 1rem 1.5rem 0.5rem 1.5rem;
    ion-item {
      --background: transparent;
      --border-style: dashed;
      // --border-color: var(--ion-color-tertiary);
      --padding-bottom: 0.5rem;
      --padding-top: 0.5rem;
      --padding-start: 0;
      --padding-end: 0;

      ion-toggle {
        margin-right: -0.7rem;
      }
    }
  }

  .button-lowercase {
    text-transform: capitalize;
    font-weight: 3 00;
  }
}
</style>
