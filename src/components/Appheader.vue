<template>  

<div>
  <b-navbar toggleable="lg" type="dark" variant="success" fixed="top">
   
    <b-navbar-brand href="#">
      <img :src="logo" class="d-inline-block align-top" alt="logo for event"  width="90" height="50"> <!--logo for the event -->
     
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#about" >About</b-nav-item>
        <b-nav-item href="#speakers">Speakers</b-nav-item>
        <b-nav-item href="#partners">Partners</b-nav-item>
        <b-nav-item href="#gallery">Gallery</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> 
  
</div>

</template>
<script>
export default {
    name:"appheader",
    props:["logo"],
    
  
  
  }

</script>
<style scoped>
.navbar-dark .navbar-nav .nav-link{
   color: white;
   font: 20px Arial bold;
 }
 
 .navbar-dark .navbar-nav .nav-link:hover{text-decoration: underline;}
 
 .bg-success{
    background-color:rgb(0,0,104)!important;
 }
 .navbar-dark .navbar-nav .nav-link .active{color: rgb(255,128,128);}
 </style>