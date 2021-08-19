<template>
  <div class="home">
    <home-hero/>
    <home-content-container/>
  </div>
</template>

<script>

import HomeHero from '@/components/Home/HomeHero'
import HomeContentContainer from '@/components/Home/HomeContentContainer'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeContentContainer,
  },
}
</script>
