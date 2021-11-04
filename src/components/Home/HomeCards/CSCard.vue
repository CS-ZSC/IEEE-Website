<template>
  <card-with-button :title="cs_card.title" :text="cs_card.text" :buttonLink="cs_card.buttonLink" :imgLink="cs_card.imgLink" />
</template>

<script>

import CardWithButton from './CardsTemplates/CardWithButton'
import config_data from '../../../../database/database2.json'
export default {
  name: "HomeCSCard",
  components: {
    CardWithButton,
  },
  data() {
    return {
      cs_card: config_data.chapters.cards.cs
    }
  }
}
</script>