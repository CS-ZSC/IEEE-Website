<template>
  <PlainCard :title="title" :text="text" :imgLink="imgLink" />
</template>

<script>
import PlainCard from '../CardsTemplates/PlainCard.vue'
export default {
  name: "MutexMissionCard",
  components: {
    PlainCard,
  },
  data() {
    return {
      title: "Our Mission",
      text: "Establishing a link between leading companies and organizations in the latest technologies, or those that support the tech ecosystem, and our community’s students, engineers, startups, and tech enthusiasts through a series of talks, training sessions, and workshops. Additionally, we aim to get students accustomed to competitions, fostering a competitive spirit and practical experience in real-world challenges.\n",
      imgLink: "./images/backgrounds/mutex-mission.png",
    }
  }
}
</script>