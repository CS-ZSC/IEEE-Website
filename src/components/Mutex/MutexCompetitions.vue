<template>
  <b-container fluid class="cards-container" mx="0">
    <b-row data-aos="fade-up" class="justify-content-center">
      <h2 class="centered-text font-weight-bold">Our Competitions</h2>
    </b-row>
    <b-row >
      <b-col>
        <expanding-line/>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3"></b-col>
      <b-col md="6" class="px-0 px-md-3 mb-3">
        <div data-aos="fade-left" class="shadow-sm h-100 card-equal-height card-hover mb-5">
          <Semaphore/>
        </div>
      </b-col>
      <b-col md="3"></b-col>
      <b-col md="6" class="px-0 px-md-3 mb-3">
        <div data-aos="fade-left" class="shadow-sm h-100 card-equal-height card-hover ">
          <FireFighting/>
        </div>
      </b-col>
      <b-col md="6" class="px-0 px-md-3 mb-3">
        <div data-aos="fade-left" class="shadow-sm h-100 card-equal-height card-hover">
          <EcoE/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.cards-container {
  max-width: 1200px;
}

.centered-text {
  text-align: center;
}

.card-equal-height {
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
}

.card-hover:hover {
  transform: scale(1.05); /* Increase size on hover */
  width: 100%; /* Increase width on hover */
}

@media (min-width: 1000px) {
  .card-shadow {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
}
</style>
<script lang="ts">
import Vue from "vue";
import EcoE from "@/components/Mutex/Eco-E.vue";
import FireFighting from "@/components/Mutex/FireFighting.vue";
import Semaphore from "@/components/Mutex/Semaphore.vue";
import ExpandingLine from "@/components/ExpandingLine.vue";

export default Vue.extend({
  components: {ExpandingLine, Semaphore, FireFighting, EcoE}
})
</script>