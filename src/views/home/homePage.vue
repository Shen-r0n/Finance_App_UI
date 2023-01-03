<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar color="primary">
        <ion-title class="ion-no-padding">
          <ion-label>
            <ion-text color="tertiary">Welcome</ion-text>
            <p>
              <ion-text color="white"><strong>Shenron </strong></ion-text>
            </p>
          </ion-label>
        </ion-title>
        <ion-avatar slot="end">
          <img src="https://www.svgrepo.com/show/29870/avatar.svg" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>

    <ion-content color="primary">
      <!-- <ion-row> -->
        <swiper>
        <swiper-slide>
          <ion-label>
            <span>Total Balance</span>
            <p class="acc-amt">
              <ion-text color="white">Rs 400231300</ion-text>
            </p>
            <span>4800080</span>
          </ion-label>
        </swiper-slide>

        <swiper-slide>
          <ion-label>
            <span>Total Balance</span>
            <p class="acc-amt">
              <ion-text color="white">Rs 352345123</ion-text>
            </p>
            <span>324143080</span>
          </ion-label>
        </swiper-slide>

        <swiper-slide>
          <ion-label>
            <span>Total Balance</span>
            <p class="acc-amt">
              <ion-text color="white">Rs 80232000</ion-text>
            </p>
            <span>9123134130</span>
          </ion-label>
        </swiper-slide>
       
      </swiper>
      <!-- </ion-row> -->

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css'

import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonLabel,
  IonContent,
  IonText,
  IonAvatar,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonLabel,
    IonContent,
    IonText,
    IonAvatar,
    Swiper,
    SwiperSlide
  },
});
</script>
