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
