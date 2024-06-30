<template>
  <div class="about-section">
    <div class="background text-center">
      <img :src="img" class="responsive-img pt-2 shadow-lg" alt="CS logo">
    </div>


    <b-container fluid="xl" class="left">
      <b-row>
        <b-col data-aos="fade-up">
          <h3 class="text-center mb-0 mt-4">about us</h3>
          <p class="text-center mt-2">{{ data['about']['about-us'] }}</p>
        </b-col>
      </b-row>
      <b-row align-h="center" align-content="center" align-v="center" class="pt-0">
        <b-col data-aos="fade-up justify-content-center ">
          <h3 class="text-center">Our Tracks</h3>
        </b-col>
      </b-row>
      <b-row data-aos="flip-left" class="pb-2">
        <hr>
      </b-row>
      <!--    <b-container fluid='xl'>-->
      <!--      <b-row>-->
      <!--        <b-col md="4" class="py-2 px-0 px-md-3 activity" v-for="(activity, index) in data['tracks']" :key="index">-->
      <!--          <card-with-button :title="activity.title" :text="activity.text" :buttonLink="activity.pageLink"-->
      <!--                            :imgLink="activity.imgLink"/>-->
      <!--        </b-col>-->
      <!--      </b-row>-->
      <!--    </b-container>-->
      <b-row align-h="center">
        <b-container fluid='xl'>
          <b-row class="justify-content-center">
            <b-col md="4" class="py-0 px-0 px-md-3 " v-for="(track, index) in data['tracks']" :key="index">
              <b-card data-aos="fade-up"
                      :title="track.name"
                      :img-src="track.img"
                      :img-alt="track.name"
                      img-top
                      tag="article"
                      style="max-width: 100%;"
                      class="mb-3 card justify-content-center">
                <b-card-text>
                  {{ track.description }}
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-row>

    </b-container>

    <!--    <b-container fluid='xl'>-->

    <!--      <b-row>-->
    <!--        <b-col md="4" class="py-2 px-0 px-md-3 activity" v-for="(activity, index) in Activities" :key="index">-->
    <!--          <card-with-button :title="activity.title" :text="activity.text" :buttonLink="activity.pageLink"-->
    <!--                            :imgLink="activity.imgLink"/>-->
    <!--        </b-col>-->
    <!--      </b-row>-->
    <!--    </b-container>-->

  </div>

</template>

<script>
// import CardWithButton from '../Home/HomeCards/CardsTemplates/CardWithButton.vue'

export default {
  props: ['data', 'img'],
  components: {
    // CardWithButton,
  },

  data() {
    return {
      url: './CS.png',
      // Activities: [
      //   {
      //     imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
      //     title: "Activity Title",
      //     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //     pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   },
      //   {
      //     imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
      //     title: "Activity Title",
      //     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //     pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   },
      //   {
      //     imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
      //     title: "Activity Title",
      //     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //     pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   },
      //   {
      //     imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
      //     title: "Activity Title",
      //     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //     pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   },
      //   {
      //     imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
      //     title: "Activity Title",
      //     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //     pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   },
      //   {
      //     imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
      //     title: "Activity Title",
      //     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      //     pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   },
      // ]
    }
  }

}

</script>

<style scoped>

h3 {
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.text-center {
  margin-top: 50px;
}

img {
  max-width: 1400px;
}
.responsive-img {
  border-radius: 50px;
  height: auto;
  max-width: 100%;
}

@media (max-width: 768px) {
  .responsive-img {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .responsive-img {
    max-width: 100%;
    height: auto;
  }
}


</style>
