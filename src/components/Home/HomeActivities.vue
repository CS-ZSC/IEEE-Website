<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col md="4" class="py-2 px-0 px-md-3 activity" v-for="(activity, index) in Activities" :key="index">
          <card-with-button :title="activity.title" :text="activity.text" :buttonLink="activity.pageLink" :imgLink="activity.imgLink" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import CardWithButton from './HomeCards/CardsTemplates/CardWithButton.vue'
import config_data from '../../../database/database2.json'

export default {
  name: "HomeActivites",
  components: {
    CardWithButton,
  },
  data (){ 
    return {
      Activities: [...config_data.activities], 
      /*
      Activities: [
        {
          imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
          title: "Activity Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
          title: "Activity Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
          title: "Activity Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
          title: "Activity Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
          title: "Activity Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
          title: "Activity Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ]
      */
    }
  },
}
</script>

<style scoped>
.activity{
  max-width: 500px;
}
</style>