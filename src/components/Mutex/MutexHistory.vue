<template>
  <div class="mutex-history">
    <b-container class="container">
      <b-row data-aos="fade-up">
        <h2 class="centered-text">Our History</h2>
      </b-row>
      <b-row>
        <b-col>
          <expanding-line/>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col class="pb-3" v-for="(year, index) in Years" :key="index">
          <plain-card class="card" :title="year.title" :imgLink="year.imgLink" :text="year.text"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PlainCard from '../CardsTemplates/PlainCard.vue'
import ExpandingLine from '../ExpandingLine.vue'
import config_data from '../../../database/database'

export default {
  name: "MutexHistory",
  components: {
    PlainCard,
    ExpandingLine
  },
  data () {
    return {
      Years : config_data.mutex.years
    }
  }
}
</script>

<style scoped>
.centered-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.container {
  max-width: 1200px;
}
.card {
  min-width: 300px;
}
</style>
