<template>
  <section  class="cards-section"> 
   <b-container fluid class="cards-container" mx="0">
      <b-row class="justify-content-center pb-0 pt-4">
        <h2>Our Activities</h2>
      </b-row>
      <b-row data-aos="flip-left" class="pb-2">
        <hr>
      </b-row>
      <b-row>
        <div >
          <home-activities data-aos="fade-down"/>
        </div>
      </b-row>
      <b-row class="justify-content-center pt-5">
        <h2>Our Chapters</h2>
      </b-row>
      <b-row data-aos="flip-left" class="pb-3">
        <hr>
      </b-row>
      <b-row>
        <b-col md="6" class="px-0 px-md-3">
          <div data-aos="fade-right" style="height:100%">
          <HomeRASCard/>
          </div>
        </b-col>
        <b-col md="6" class="px-0 px-md-3">
          <div data-aos="fade-left">
          <HomeCSCard/>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center pt-5">
        <h3>OUR PARTNERS</h3>
      </b-row>
      <b-row data-aos="flip-left" class="pb-3">
        <hr>
      </b-row>
      <b-row class="justify-content-center">
        <div data-aos="zoom-in-up">
          <home-partners-section/>
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HomeCSCard from './HomeCards/CSCard.vue'
import HomeRASCard from './HomeCards/RASCard.vue'
import HomePartnersSection from './PartnersSection.vue'
import HomeActivities from './HomeActivities.vue'

export default {
  name: 'HomeContentContainer',
  components: { 
    HomePartnersSection,
    HomeActivities,
    HomeRASCard,
    HomeCSCard,
  }
}
</script>

<style scoped>
section {
  background-color: whitesmoke;
  color: #002855;
  padding: 0;
  margin: 0;
  padding-bottom: 5em;
}

h2 {
  margin: 0;
}

.cards-container {
  margin: auto;
  margin-top: 0;
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
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
}
</style>