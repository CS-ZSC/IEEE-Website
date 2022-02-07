<template>
  <card-with-button :title="ras_card.title" :text="ras_card.text" :buttonLink="ras_card.buttonLink" :imgLink="ras_card.imgLink" />
</template>

<script>

import CardWithButton from './CardsTemplates/CardWithButton'
import json from '../../../../database/database.json'
export default {
  name: "HomeRASCard",
  components: {
    CardWithButton,
  },
  data() {
    return {
      ras_card: {
        "title": "RAS",
        "text": json['home']['cards']['ras']['text'],
        "buttonLink": "",
        "imgLink": json['home']['cards']['ras']['img-link']
      }
    }
  }
}
</script>