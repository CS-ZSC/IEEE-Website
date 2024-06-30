<template>
    <team v-bind:data="data"/>
</template>

<script>

import json from '../../../database/database'
import Team from "@/components/committees/Team.vue";

export default {
  name: "Board",

  components: {
    'team': Team,
  },
  data() {
    return {
      data: json.home.board
    }
  }
}
</script>

<style scoped>
</style>
