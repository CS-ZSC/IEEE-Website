<template>
  <card-with-button :title="ras_card.title" :text="ras_card.text" :buttonLink="ras_card.buttonLink" :imgLink="ras_card.imgLink" />
</template>

<script>

import CardWithButton from './CardsTemplates/CardWithButton'
import config_data from '../../../../database/database2.json'

export default {
  name: "HomeRASCard",
  components: {
    CardWithButton,
  },
  data() {
    return {
      ras_card: config_data.chapters.cards.ras
    }
  }
}
</script>