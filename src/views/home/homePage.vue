<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar color="primary">
        <ion-title class="ion-no-padding" mode="md">
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
        <swiper
          :modules="modules"
          :space-between="30"
          navigation
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="account in accounts" :key="account.id">
            <!-- <div> -->
            <ion-label>
              <span>Total Balance</span><br />
              <!-- <p class="acc-amt">
                  <ion-text color="white">Rs {{ payment.balance }}</ion-text>
                </p> -->
              <span
                ><p class="acc-amt">Rs. {{ account.balance }}</p></span
              >
              <span
                ><p>{{ account.accountNumber }}</p></span
              >
            </ion-label>
            <!-- </div> -->
          </swiper-slide>
        </swiper>
      </ion-row>

      <ion-row class="ion-text-center feature-list">
        <swiper :slides-per-view="3.5">
          <swiper-slide v-for="feature in features" :key="feature.id">
            <div class="feature-col">
              <ion-button :color="feature.color">
                <font-awesome-icon :icon="feature.icon" />
                <!-- <font-awesome-icon :icon="['fas', 'HatWizard']"></font-awesome-icon> -->
                <!-- <fa icon="HatWizard"></fa> -->
                <!-- <ion-icon slot="end" :icon="settingsOutline"></ion-icon> -->
              </ion-button>
              <ion-label>{{ feature.name }}</ion-label>
            </div>
          </swiper-slide>
        </swiper>
      </ion-row>

      <ion-list class="transactions">
        <ion-list-header>
          <ion-label color="medium">Transactions</ion-label>
        </ion-list-header>

        <ion-item-group>
          <ion-item
            lines="full"
            v-for="transaction in transactions"
            :key="transaction.id"
          >
            <ion-thumbnail slot="start" class="ion-text-center">
              <img
                v-if="transaction.amount >= 0"
                src="assets/imgs/down-left-arrow.png"
              />
              <img
                v-if="transaction.amount < 0"
                src="assets/imgs/up-right.png"
              />
            </ion-thumbnail>
            <ion-label>
              <ion-text>{{ transaction.to }}</ion-text>
              <p>
                <ion-text>
                  {{ transaction.date }}
                  <!--  {{ transaction.date | date: 'MMM DD, YYYY'} -->
                </ion-text>
              </p>
            </ion-label>
            <ion-text slot="end" color="primary">
              {{
                transaction.amount >= 0
                  ? "Rs " + transaction.amount
                  : "- Rs " + transaction.amount * -1
              }}
            </ion-text>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
// import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

import store from "@/store/index";

import {
  homeOutline,
  swapHorizontalOutline,
  cardOutline,
  settingsOutline,
} from "ionicons/icons";

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
  IonButton,
  IonList,
  IonItem,
  IonListHeader,
  IonItemGroup,
  IonThumbnail,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonLabel,
    IonContent,
    IonText,
    IonAvatar,
    Swiper,
    SwiperSlide,
    IonRow,
    IonButton,
    IonList,
    IonItem,
    IonListHeader,
    IonItemGroup,
    IonThumbnail,
  },

  setup() {
    return {
      homeOutline,
      swapHorizontalOutline,
      cardOutline,
      settingsOutline,
      modules: [Navigation, Pagination],
    };
  },
  data() {
    return {
      transactions: store.getters.getTransaction,

      accounts: [
        {
          id: 1,
          accountNumber: 321234124,
          balance: 10000,
        },
        {
          id: 4,
          accountNumber: 514324124,
          balance: 40000,
        },
        {
          id: 2,
          accountNumber: 324124324314,
          balance: 20000,
        },
        {
          id: 3,
          accountNumber: 4124234124124,
          balance: 30000,
        },
      ],

      features: [
        {
          id: 1,
          color: "tertiary",
          icon: " fa-solid fa-paper-plane",
          name: "Send",
        },
        {
          id: 2,
          color: "tertiary",
          icon: "fa-solid fa-fast-forward",
          name: "Request",
        },
        {
          id: 3,
          color: "tertiary",
          icon: "fa-brands fa-facebook",
          name: "Top-Up",
        },
        {
          id: 4,
          color: "tertiary",
          icon: "fa-solid fa-file-invoice-dollar",
          name: "Bills",
        },
       
      ],
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap");
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

    span {
      p.acc-amt {
        margin: 1.5rem 0;
        font-size: 3rem;
        font-weight: 700;
      }
    }

    // p.acc-amt {
    //   ion-text {
    //     margin: 1rem 0;
    //     font-size: 3rem;
    //     font-weight: 700;
    //   }
    // }
  }
}
//
ion-row.banners::after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  background: #194648;
  border-radius: 2.5rem;
  z-index: 0;
  border: 2px solid transparent;
}

ion-row.feature-list {
  padding: 5vh 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div.feature-col {
    // display: flex;
    // flex-direction: column;
    // align-items:center;
    flex-basis: 25%;
    text-align: center;
    // align-content: center;
    // justify-content: center;
    ion-button {
      --border-radius: 15px;
      padding-bottom: 5px;
      height: 7vh;
      width: 7vh;
    }
    ion-label {
      font-size: 1rem;
      
    }
  }
}

ion-list.transactions {
  border-radius: 8vh 8vh 0 0;
  background: var(--ion-color-secondary);
  padding-bottom: 10vh;
  ion-list-header {
    padding-inline-start: 5.5vh;
    margin-top: 1.5vh;
    margin-bottom: -1.5vh;
    font-weight: 500;
  }

  ion-list-header,
  ion-item {
    ion-label {
      font-size: 1.1rem;
    }
  }
}

ion-item-group {
  padding: 0 3.5vh;
  ion-item {
    font-weight: bold;
    --background: transparent;
    --border-style: dashed;
    // --border-color: var(--ion-color-tertiary);
    --padding-bottom: 1rem;
    --padding-top: 1rem;
    --padding-start: 0;

    ion-text [slot="end"] {
      font-size: 1rem;
    }
    p {
      font-size: 0.1rem;
      font-weight: normal;
      margin-top: 1px;
      opacity: 0.8;
    }

    ion-thumbnail {
      height: 6vh;
      width: 6vh;
      border-radius: 10px;
      background: var(--ion-color-white);
      box-shadow: 0px 3px 6px rgb(3 181 170 / 4%);
      img {
        height: 4vh;
        width: 4vh;
        transform: translateY(25%);
      }
    }
  }
}
</style>
