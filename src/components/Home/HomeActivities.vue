<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col md="4" class="py-2 px-0 px-md-3 activity" v-for="(activity, index) in Activities" :key="index+'-home'">
          <card-with-button :title="activity.title" :text="activity['short-description']" :imgLink="activity['img-link']" :imgAlt="activity.title" buttonLink="/activities"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import CardWithButton from './HomeCards/CardsTemplates/CardWithButton.vue'
import json from '../../../database/database'

export default {
  name: "HomeActivites",
  components: {
    CardWithButton,
  },
  data (){ 
    return {
      Activities: [...json.activities.courses], 
    }
  },
}
</script>

<style scoped>
.activity{
  max-width: 500px;
}
</style>