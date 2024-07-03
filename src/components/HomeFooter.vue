<template>
  <footer class="justify-content-center">
    <b-container class=" justify-content-center">
      <b-row
          class=" justify-content-center footer text-white text-center align-items-center d-flex justify-content-center w-100 ">
        <b-col class="m-0 p-0">
          <div class="contact-us pt-2">
            <h5 class="m-0">Contact Us</h5>
            <div class="contact-info"
                 style="min-height: 48px; display: flex; justify-content: center; align-items: center;">
              <a href="mailto:info@ieee-zsb.org" class="link m-0 text-decoration-none text-white hover-underline"
                 style="font-size: medium">info@ieee-zsb.org</a>
            </div>
          </div>
        </b-col>
        <b-col class="m-0 p-0">
          <div class="follow-us">
            <h5 class="m-0">Follow Us</h5>
            <div class="follow-links" size="medium">
              <span class="link">
                <a href="https://www.facebook.com/IEEEZSB">
                  <b-icon-facebook class="small"/>
                </a>
              </span>
              <span class="link">
                <a href="https://www.linkedin.com/company/ieeezsb/">
                  <b-icon-linkedin class="small"/>
                </a>
              </span>
              <span class="link">
                <a href="https://www.instagram.com/ieeezsb/">
                  <b-icon-instagram class="small"/>
                </a>
              </span>
              <span class="link">
                <a href="https://twitter.com/ieeezsb">
                  <b-icon-twitter class="small"/>
                </a>
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col>
          <p class="m-0 p-0" style="font-size: small">© Created by CS Chapter of IEEE ZSB 2024</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>


<script>
export default {
  name: "HomeFooter",
}
</script>

<style scoped>
footer {
  width: 100%;
  background-color: #00629B;
  padding: 0;
  color: white;
}

contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

follow-us {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
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

.text-center {
  text-align: center;
}

</style>
