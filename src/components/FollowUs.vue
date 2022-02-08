<template>
    <div class="follow-us-container">
      <strong class="follow-us-text">Follow Us</strong><br /><br />
      <div class="follow-us-box">
        <ul class="list-social-media-links" >
          <li class="list-inline-item" v-for="socialLink in social" :key="socialLink.link">
            <a :href="socialLink.link" target="_blank"
              ><b-icon :icon="socialLink.icon" font-scale="2.5"></b-icon
            ></a>
          </li>
          &nbsp;&nbsp;
        </ul>
      </div>
    </div>
</template>

<script>
import json from "../../database/database"
export default {
  name: "FollowUs",
  data(){
    return {
      social:json.social
    }
  }
};
</script>

<style scoped>
.list-social-media-links{
  padding:0px;
}
</style>
