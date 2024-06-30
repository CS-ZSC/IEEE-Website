<template>
  <card-with-button :title="ras_card.title" :text="ras_card.text" :buttonLink="ras_card.buttonLink" :imgLink="ras_card.imgLink" />
</template>

<script>

import CardWithButton from './CardsTemplates/CardWithButton'
import json from '../../../../database/database'
const {name ,img,about } = json.committees.ras
export default {
  name: "HomeRASCard",
  components: {
    CardWithButton,
  },
  data() {
    return {
      ras_card:{
        title:name,
        text:about['about-us'],
        buttonLink:`ras-committee`,
        imgLink:require('../../committees/'+img)

      }
    }
  }
}
</script>