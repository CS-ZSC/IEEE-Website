<template>
  <PlainCard :title="title" :text="text" :imgLink="imgLink" />
</template>

<script>
import PlainCard from '../CardsTemplates/PlainCard.vue'
export default {
  name: "MutexVisionCard",
  components: {
    PlainCard,
  },
  data() {
    return {
      title: "Our Vision",
      text: "Our vision is to bridge the gap between the latest technological trends and community awareness. We aim to empower individuals with the knowledge and skills to thrive in a rapidly evolving tech landscape, creating a well-informed and innovative community.",
      imgLink: "./images/backgrounds/mutex-vision.png",
    }
  }
}
</script>