<template>
  <div id="app">
    <app-navigation/>
    <transition name="fade" mode="out-in">
      <router-view style="z-index:0; overflow:hidden"></router-view>
    </transition>
    <home-footer/>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import HomeFooter from './components/HomeFooter.vue'
import router from './router'

export default {
  components: {
    AppNavigation,
    HomeFooter
  },
  mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      const resolved = router.resolve(path);
      if (resolved.route.matched.length > 0) {
        this.$router.push(path);
      } else {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
