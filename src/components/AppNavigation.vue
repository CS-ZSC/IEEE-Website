<template>
  <div class="navigation">
    <!-- NOTICE when changing toggleable you will have to change number of pixels below for animation -->
    <b-navbar toggleable="lg" class="dark-nav" type="dark" >
      <b-navbar-brand tabindex="0" class="text" to="/"><img src="../../public/logo.svg" alt="logo"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" type="dark" is-nav>
        <b-navbar-nav fixed>
          <b-nav-item class="text hover-underline" to="/activities">Activities</b-nav-item>
<!--          <b-nav-item class="text hover-underline" to="/member-ship">Membership</b-nav-item>-->
          <b-nav-item class="text hover-underline " to="/cs-committee"><div class="samy">CS</div></b-nav-item>
          <b-nav-item class="text hover-underline" to="/ras-committee">RAS</b-nav-item>
          <b-nav-item class="text hover-underline" to="/pes-committee">PES</b-nav-item>
          <b-nav-item class="text hover-underline" to="/mutex">Mutex</b-nav-item>
          <!-- <b-nav-item class="text hover-underline" to="/FAQ">FAQ</b-nav-item> -->
<!--          <b-nav-item class="text hover-underline" to="/contact-us"><a>Contact Us</a></b-nav-item>-->
          <!-- <b-nav-item class="text hover-underline" to="/event"><a>Event</a></b-nav-item> -->
          <!-- tbh about page isn't needed-->
<!--           <b-nav-item class="text hover-underline" to="/about"><a>About Us</a></b-nav-item> -->
        </b-navbar-nav>

<!--        <b-navbar-nav class="ml-auto">-->
<!--          <b-nav-item-dropdown v-bind:text="lang" right>-->
<!--            <b-dropdown-item @click="changeSiteLangToEN" href="#">EN</b-dropdown-item>-->
<!--            <b-dropdown-item @click="changeSiteLangToAR" href="#">AR</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
<!--          <b-nav-form>-->
<!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--          </b-nav-form>-->
<!--        </b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// export default {
//   name: 'AppNavigation',
//   data() {
//     return {
//       lang: "EN",
//     }
//   },
//   methods: {
//     changeSiteLangToAR() {
//       this.lang = "AR";
//     },
//     changeSiteLangToEN() {
//       this.lang = "EN";
//     }
//   }

// }
</script>

<style scoped>
.navigation {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  box-shadow: 0 10px 10px -2px rgba(0,0,0,.4);
}
.dark-nav {
  background-color: #00629B;
}

.text {
  font-weight: normal;
}

@media (min-width: 992px) {
  .hover-underline {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }

  .hover-underline:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 45%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .hover-underline:hover:after { 
    width: 90%; 
    left: 5%;
  }

  .hover-underline > .router-link-active:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 5%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 90%;
  }
}
</style>
