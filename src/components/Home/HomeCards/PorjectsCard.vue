<template>
  <card-with-button :title="title" :text="text" :buttonLink="buttonLink" :imgLink="imgLink" />
</template>

<script>

import CardWithButton from './CardsTemplates/CardWithButton'

export default {
  name: "HomeProjectsCard",
  components: {
    CardWithButton,
  },
  data() {
    return {
      title: "Projects",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonLink: "#",
      imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
    }
  }
}
</script>