<template>
  <div>
    <img :src="src" width="100%" height="700" alt="image for the event">
  </div>

</template>
<script>
export default {
  name: "Slider",
  props:["src"],
};
</script>