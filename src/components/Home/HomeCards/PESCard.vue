<template>
  <card-with-button :title="pes_card.title" :text="pes_card.text" :buttonLink="pes_card.buttonLink" :imgLink="pes_card.imgLink" />
</template>

<script scoped>

import CardWithButton from './CardsTemplates/CardWithButton'
import json from '../../../../database/database'
const {name ,img,about } = json.committees.pes
export default {
  name: "HomePESCard",
  components: {
    CardWithButton,
  },
  data() {
    return {
      pes_card:{
        title:name,
        text:about['about-us'],
        buttonLink:`pes-committee`,
        imgLink:require('../../committees/'+img)
      }
    }
  }
}

</script>