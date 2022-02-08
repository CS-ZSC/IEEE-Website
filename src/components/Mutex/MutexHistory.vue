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
        <b-col class="pb-3" v-for="(year, index) in Years" :key="index" v-on:click="select" :id="`year-${index}`">
          <plain-card class="card h-100" v-bind:class="{ 'active' : index==selected }" :title="year.title" :imgLink="`./images/cards/mutex/mutex_${year.year}.jpg`" :text="year.text"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PlainCard from '../CardsTemplates/PlainCard.vue'
import ExpandingLine from '../ExpandingLine.vue'
import json from '../../../database/database'

export default {
  name: "MutexHistory",
  components: {
    PlainCard,
    ExpandingLine
  },
  data () {
    return {
      selected:0,
      Years : json.mutex.years
    }
  },
  methods:{
    select: function(event){
      let currentIndex = event.currentTarget.id.replace("year-","")
      this.selected = currentIndex
      this.$emit('selected',currentIndex)
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
  transition: box-shadow .3s;

}

.card:hover{
  cursor: pointer;
  box-shadow: rgba(16, 95, 212, 0.35) 0px 5px 15px;
}



.active{
  box-shadow: rgb(16, 94, 212) 0px 5px 15px;
}
.active:hover{
  box-shadow: rgb(16, 94, 212) 0px 5px 15px;
}


</style>
