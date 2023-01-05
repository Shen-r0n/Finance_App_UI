<template>
  <ion-page>
    <ion-header class="ion-no-border" translucent>
      <ion-toolbar>
        <ion-title color="primary"> Transaction </ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment mode="ios">
          <ion-segment-button @click="changeInFlow(true)">
            <ion-label> In-flow </ion-label>
          </ion-segment-button>
          <ion-segment-button @click="changeInFlow(false)">
            <ion-label> Out-flow </ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    
    <ion-list class="transactions">
      <ion-item-group v-for="transaction in transactions" :key="transaction.id">
        <ion-item lines="full" v-if="inflow && transaction.amount >= 0">
          <ion-thumbnail slot="start" class="ion-text-center">
            <img
              v-if="transaction.amount >= 0"
              src="assets/imgs/up-right.png"
            />
            <img
              v-if="transaction.amount < 0"
              src="assets/imgs/down-left-arrow.png"
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
        <ion-item lines="full" v-if="!inflow && transaction.amount < 0">
          <ion-thumbnail slot="start" class="ion-text-center">
            <img
              v-if="transaction.amount >= 0"
              src="assets/imgs/up-right.png"
            />
            <img
              v-if="transaction.amount < 0"
              src="assets/imgs/down-left-arrow.png"
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

    <!-- <ion-button @click="addtransaction">add transaction</ion-button> -->
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonSegmentButton,
  IonLabel,
  IonSegment,
  IonList,
  IonThumbnail,
  IonItem,
  IonText,
} from "@ionic/vue";

import store from "@/store/index";

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonSegmentButton,
    IonLabel,
    IonSegment,
    IonList,
    IonThumbnail,
    IonItem,
    IonText,
  },
  data() {
    return {
      transactions: store.getters.getTransaction,
      inflow: true,
    };
  },
  methods: {
    changeInFlow(data: any) {
      this.inflow = data;
      console.log("inflow:::", this.inflow);
    },
    addtransaction(){
      store.dispatch("addtransaction",{id:5,to:"ramey",date:"2032-02-11",amount:90000},
      )
      .then(data=>{console.log(data);})
      .catch(err=>{
        console.log(err);
      })
    }
  },
});
</script>

<style lang="scss">
ion-header {
  ion-toolbar {
    --background: var(--ion-color-secondary);
    ion-segment {
      --background: var(--ion-color-primary);
      ion-segment-button {
        --color: var(--ion-color-white);
        --color-checked: var(--ion-color-primary);
      }
    }
  }
}

ion-button{
  margin-bottom: 10vh;
}

  
</style>
