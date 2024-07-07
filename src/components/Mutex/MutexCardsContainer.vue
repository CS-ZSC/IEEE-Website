<template>
  <b-container fluid class="cards-container" mx="0">
    <b-row data-aos="fade-up">
      <h2 class="centered-text font-weight-bold">Goals</h2>
    </b-row>
    <b-row>
      <b-col>
        <expanding-line/>
      </b-col>
    </b-row>
    <b-row class="pt-3 d-flex">
      <b-col md="6" class="px-0 px-md-3 d-flex">
        <div data-aos="fade-right" data-aos-delay="700" class="flex-fill">
          <mutex-mission-card class="card-content"/>
        </div>
      </b-col>
      <b-col md="6" class="px-0 px-md-3 d-flex">
        <div data-aos="fade-left" data-aos-delay="700" class="flex-fill">
          <mutex-vision-card class="card-content"/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ExpandingLine from '../ExpandingLine.vue'
import MutexMissionCard from './MutexMissionCard.vue'
import MutexVisionCard from './MutexVisionCard.vue'
export default {
  name: "MutexCardsContainer",
  components: {
    MutexMissionCard,
    MutexVisionCard,
    ExpandingLine,
  },
}
</script>

<style scoped>
.cards-container {
  max-width: 1200px;
}
.centered-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media (min-width: 1000px) {
  .card-shadow {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
}
</style>
