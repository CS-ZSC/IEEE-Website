<template>
  <div class="mutex-event">
    <mutex-hero/>
    <mutex-breif/>
    <div class="space"/>
    <mutex-cards-container/>
    <div class="space"/>
    <div class="space"/>
    <mutex-history @selected="updatePartners"/>
    <div class="space"/>
    <mutex-speakers :active="selectedEvent"/>
    <div class="space"/>
  </div>
</template>

<script>

import MutexHero from '@/components/Mutex/MutexHero'
import MutexBreif from '@/components/Mutex/MutexBreif'
import MutexHistory from '@/components/Mutex/MutexHistory'
import MutexCardsContainer from '../components/Mutex/MutexCardsContainer.vue'
import MutexSpeakers from '../components/Mutex/MutexSpeakers.vue'


export default {
  name: 'MutexEvent',
  components: {
    MutexHero,
    MutexBreif,
    MutexHistory,
    MutexCardsContainer,
    MutexSpeakers,
  },
  data(){
    return {
      selectedEvent:0
    }
  },
  methods:{
    updatePartners:function (index){
      this.selectedEvent = index

    }
  }
}
</script>

<style scoped>
.space {
  height: 2em;
  width: 100%;
}
</style>