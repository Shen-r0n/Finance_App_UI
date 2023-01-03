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
      <ion-row class="banners">
        <swiper>
          <!-- <div> -->
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
          <!-- </div> -->
        </swiper>
      </ion-row>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonLabel,
  IonContent,
  IonText,
  IonAvatar,
  IonRow,
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
    SwiperSlide,
    IonRow,
  },

  

});
</script>

<style lang="scss">
ion-toolbar {
  --padding-start: 16px;
  --padding-end: 16px;

  ion-title {
    max-width: 40vh;

    ion-label {
      ion-text {
        font-size: 1rem;
      }
      p {
        ion-text {
          font-size: 1.3rem !important;
        }
      }
    }
  }

  ion-avatar {
    height: 2.5rem;
    width: 2.5rem;
    border: 1px solid var(--ion-color-tertiary);
    img {
      max-width: 100%;
    }
  }
}

ion-content {
  ion-row.banners {
    position: relative;
    padding: 1.5rem;
    height: 34vh;
    background: linear-gradient(
      120.67deg,
      #03b5aa 17.45%,
      rgba(162, 167, 127, 0.09) 105.58%
    );
    border-radius: 2.5rem;
    margin: 6vh 1rem 0 1rem;

    swiper {
      swiper-slide {
        ion-label {
          p.acc-amt {
            font-size: 3rem;
            margin: 1rem 0;
            font-weight: 700;
          }
        }
      }
    }
  }
}


ion-row.banners::after{
  content: "";
  position: absolute;
  top:1px;
  left:1px;
  right:1px;
  bottom:1px;
  background: #194648;
  border-radius: 2.5rem;
  z-index:0;
  border: 2px solid transparent;

}
</style>
