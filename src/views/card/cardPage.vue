<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title> Card Page </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="primary">
      <div class="bg-circle"></div>
      <ion-row>
        <swiper
          :slides-per-view="1"
          :space-between="40"
          :centered-slides="true"
        >
          <swiper-slide v-for="card in cards" :key="card.id">
            <div class="card-details">
              <img :src="card.company_img" class="logo"/>
              <div align="center">
                <ion-label>
                  <div class="acc-amt">
                    <ion-text color="white">
                      {{ card.card_no }}
                    </ion-text></div>
                    <span>{{ card.card_holder }}</span>
                  
                </ion-label>
              </div>
              <p class="exp ion-text-start">
                <ion-text color="white">
                  {{ card.exp_date }}
                </ion-text>
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </ion-row>

      <ion-list class="transactions">
        <ion-list-header>
          <ion-label color="medium">Settings</ion-label> 
        </ion-list-header>

        <ion-item-group>
          <ion-item lines="full">
            <ion-label>
              Enable Card
            </ion-label>
            <ion-toggle slot="end" :checked="true"></ion-toggle>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item lines="full" detail>
            <ion-label>
              Change Pin
            </ion-label>
          </ion-item>
        </ion-item-group>
      </ion-list>
      
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
  IonRow,
  IonLabel,
  IonText,
  IonContent,
  IonToggle,
  IonItem,
  IonItemGroup,
  IonList,
  
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";

import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    Swiper,
    SwiperSlide,
    IonRow,
    IonLabel,
    IonText,
    IonContent,
    IonToggle,
    IonItem,
    IonItemGroup,
    IonList,
    
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          company_img: "assets/imgs/mastercard.png",
          card_no: "1234 4321 1234 3412",
          card_holder: "Shen honda",
          exp_date: "02/12",
        },
        {
          id: 2,
          company_img: "assets/imgs/visa.png",
          card_no: "1234 4321 1234 3412",
          card_holder: "Shen honda",
          exp_date: "02/12",
        },
        {
          id: 3,
          company_img: "assets/imgs/mastercard.png",
          card_no: "1234 4321 1234 3412",
          card_holder: "Shen honda",
          exp_date: "02/12",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
ion-content {
  .bg-circle {
    position: absolute;
    width: 33vh;
    height: 33vh;
    left: -6rem;
    top: 7vh;
    border-radius: 50%;
    background: rgba(117, 254, 200, 0.73);
  }
}
ion-row {
  margin: 5vh 1rem 6vh 1rem;
  
  height: 37vh;
  div.card-details {
    height: 40vh;
    width:50vh;
    border-radius: 2.5rem;
    padding: 0 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
    border: 2px solid rgba(127, 212, 168, 0.2);
    
    img.logo{
      display:flex;
      // align-self: start;
      align-self: flex-start;
      width: 2.5rem;
      margin: 2rem 0 2rem 0;
    }

    ion-label {
      div.acc-amt {
        margin: 0.2rem 0;
        font-size: 1.5rem;
        font-weight: 700;
      }
      span {
        font-size: 1.1rem;
        font-weight: 500;
      }
    }
    p.exp {
      font-size: 1rem;
      font-weight: 500;
      margin: 3rem 0;
    }
  }
}
</style>
