<template>
  <card-with-button :title="cs_card.title" :text="cs_card.text" :buttonLink="cs_card.buttonLink" :imgLink="cs_card.imgLink" />
</template>

<script scoped>

import CardWithButton from './CardsTemplates/CardWithButton'
import json from '../../../../database/database'
const {name ,img,about } = json.committees.cs
export default {
  name: "HomeCSCard",
  components: {
    CardWithButton,
  },
  data() {
    return {
      cs_card:{
        title:name,
        text:about['about-us'],
        buttonLink:`${name.toLowerCase()}-committee`,
        imgLink:require('../../committees/'+img)

      }
      // cs_card: {
      //   "title": "CS",
      //   "text": json['home']['cards']['cs']['text'],
      //   "buttonLink": "no",
      //   "imgLink": json['home']['cards']['cs']['img-link']
      // }
    }
  }
}
console.log(json['home']['cards']['cs']['text'])

</script>