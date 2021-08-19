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
import PlainCard from '../../CardsTemplates/PlainCard.vue'
import ExpandingLine from '../../ExpandingLine.vue'

export default {
  name: "MutexHistory",
  components: {
    PlainCard,
    ExpandingLine
  },
  data () {
    return {
      Years :[
        {
          title: "2017",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          imgLink: "/images/Zag.jpg"
        },
        {
          title: "2018",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          imgLink: "/images/Zag.jpg"
        },
        {
          title: "2019",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          imgLink: "/images/Zag.jpg"
        },
        {
          title: "2020",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          imgLink: "/images/Zag.jpg"
        },
        {
          title: "2021",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          imgLink: "/images/Zag.jpg"
        },
        {
          title: "2022",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          imgLink: "/images/Zag.jpg"
        },
      ]
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
