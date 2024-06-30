<template>
  <section class="cards-section">
    <HomeAboutUs/>
    <b-container fluid class="cards-container" mx="0">
      <b-row class="justify-content-center pb-0 pt-4">
        <h2 class="font-weight-bold">Our Activities</h2>
      </b-row>
      <b-row data-aos="flip-left" class="pb-2">
        <hr>
      </b-row>
      <b-row>
        <div>
          <Home-Events data-aos="fade-down"/>
        </div>
      </b-row>
      <b-row class="justify-content-center pt-5">
        <h2>Our Chapters</h2>
      </b-row>
      <b-row data-aos="flip-left" class="pb-3">
        <hr>
      </b-row>
      <b-row>
        <b-col md="3"></b-col>
        <b-col md="6" class="px-0 px-md-3 mb-3">
          <div data-aos="fade-left" class="shadow-sm h-100 card-equal-height">
            <HomeCSCard/>
          </div>
        </b-col>
        <b-col md="3"></b-col>
        <b-col md="6" class="px-0 px-md-3 mb-3">
          <div data-aos="fade-left" class="shadow-sm h-100 card-equal-height">
            <HomeRASCard/>
          </div>
        </b-col>
        <b-col md="6" class="px-0 px-md-3 mb-3">
          <div data-aos="fade-left" class="shadow-sm h-100 card-equal-height">
            <HomePESCard/>
          </div>
        </b-col>
      </b-row>

      <!--      <b-row class="justify-content-center pt-5">-->
      <!--        <h3>OUR PARTNERS</h3>-->
      <!--      </b-row>-->
      <!--      <b-row data-aos="flip-left" class="pb-3">-->
      <!--        <hr>-->
      <!--      </b-row>-->
      <!--      <b-row class="justify-content-center">-->
      <!--        <div data-aos="zoom-in-up">-->
      <!--          <home-partners-section/>-->
      <!--        </div>-->
      <!--      </b-row>-->
    </b-container>
    <Board class="mt-5"/>
  </section>
</template>

<script>
import HomeCSCard from './HomeCards/CSCard.vue'
import HomeRASCard from './HomeCards/RASCard.vue'
// import HomePartnersSection from './PartnersSection.vue'
// import HomeActivities from './Tracks.vue'
import HomePESCard from "@/components/Home/HomeCards/PESCard.vue";
import HomeEvents from "@/components/Home/HomeEvents.vue";
import HomeAboutUs from "@/components/Home/HomeAboutUs.vue";

import Board from "@/components/Home/Board.vue";

export default {
  name: 'HomeContentContainer',

  components: {
    Board,
    HomeAboutUs,
    HomeEvents,
    // HomePartnersSection,
    // HomeActivities,
    HomeRASCard,
    HomeCSCard,
    HomePESCard,

  }
}
</script>

<style scoped>
section {
  background-color: whitesmoke;
  color: #002855;
  padding: 0 0 0 0;
  margin: 0 0 25px;
}

h2 {
  margin: 0;
}

.cards-container {
  margin: 0 auto auto;
  max-width: 1200px;
}

hr {
  display: block;
  width: 50%;
  border-width: 5px;
  border-radius: 16px;
  background-color: #002855;
}

@media (min-width: 1000px) {
  .card-shadow {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
}
</style>