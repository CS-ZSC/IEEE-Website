<template>
    <div class="partners-container">
      <div class="partner" v-for="(partner, index) in Partners" :key="index">
        <a :href="partner.websiteLink">
          <img :src="partner.imgLink" :alt="partner.name" style="max-width:110px;">
        </a>
      </div>
    </div>
</template>

<script>

import config_data from '../../../database/database2.json'

export default {
  name: "HomePartnersSection",
  data () {
    return {
      Partners: config_data.partners
    }
  }
}
</script>

<style scoped>
.section {
  width: 100%;
}
.partners-container {
  max-width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
}
.partner {
  padding: 1em;
  display: block;
}
</style>