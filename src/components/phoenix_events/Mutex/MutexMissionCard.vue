<template>
  <PlainCard :title="title" :text="text" :imgLink="imgLink" />
</template>

<script>
import PlainCard from '../../CardsTemplates/PlainCard.vue'
export default {
  name: "MutexMissionCard",
  components: {
    PlainCard,
  },
  data() {
    return {
      title: "Our Mission",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgLink: "/images/Zag.jpg",
    }
  }
}
</script>