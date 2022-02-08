<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="8">
          <div class="contact-us">
            <h3>CONTACT US</h3>
            <div class="contact-info">
              email: info@ieee-zsb.org
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="follow-us">
            <h3>FOLLOW US</h3>
            <div class="follow-links">
              <span v-for="socialLink in socials" :key="socialLink.icon" class="link">
                <a :href="socialLink.link">
                  <b-icon :icon="socialLink.icon" />
                </a>
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import json from '../../database/database'
export default {
  name: "HomeFooter",
  data(){
    return {
      socials:json.social
    }
  }
}
</script>

<style scoped>
footer {
  min-height: 180px;
  background-color: #00629B;
  padding: 2em;
  color: white;
}

.link {
  padding-right: 10px;
  font-size: 2em;
}
.link:hover {
  opacity: 0.7;
}

.b-icon {
  color: white;
}
</style>