<template>
  <ion-page>
    <ion-header class="ion-no-border" translucent>
      <ion-toolbar>
        <ion-title color="primary"> Transaction </ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment mode="ios">
          <ion-segment-button>
            <ion-label> In-flow </ion-label>
          </ion-segment-button>
          <ion-segment-button>
            <ion-label> Out-flow </ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content color="secondary" fullscreen>
      <ion-list class="transactions">
        <ion-item-group>
          <ion-item
            lines="full"
            v-for="transaction in transactions"
            :key="transaction.id"
          >
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
  IonSegmentButton,
  IonLabel,
  IonSegment,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonSegmentButton,
    IonLabel,
    IonSegment,
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
</style>
