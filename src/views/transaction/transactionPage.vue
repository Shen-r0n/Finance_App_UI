<template>
    <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>
                Transaction Page
            </ion-title>
        </ion-toolbar>
    </ion-header>
</ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonToolbar, IonHeader, IonTitle } from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
  },
});
</script>
