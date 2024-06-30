<template>
  <div class="mutex-breif">
    <horizantal-card :title="title" :text="text" :imgLink="imgLink" :imgAlt="imgAlt"/>
  </div>
</template>

<script>
import HorizantalCard from '../Home/HomeCards/CardsTemplates/HorizantalCard'

export default {
  name: "MutexBreif",
  components: {
    HorizantalCard,
  },
  data() {
    return {
      title: "About Mutex",
      imgLink: "/images/backgrounds/mutex-about.png",
      imgAlt: "IEEE Mutex logo",
      text: `MUTEX is the biggest annual technological event in the Delta region, hosted by IEEE Zagazig SB. The event focuses on introducing the latest technologies to the audience and setting a clear path for them to follow. This year, MUTEX is different. In addition to sessions and workshops on the latest technologies, we will have competitions in three different fields: a Problem Solving Contest, a Formula Firefighting Robot Competition, and a Smart Homes Hackathon.`,
    }
  }
}
</script>

<style scoped>
.mutex-breif {
  margin: 0 auto;
  max-width: 1200px;
}

@media (max-width: 960px) {
  .mutex-breif {
    padding: 0.5em;
    margin: 0.5em;
  }
}
</style>