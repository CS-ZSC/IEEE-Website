<template lang="html">
  <center class="Socities">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="header">
        <h3>IEEE Socities</h3>
      </div>
      <div class="carousel-item active">
        <div class="img">
          <img :src="url" class="d-block w-100" alt="...">
        </div>
        <div class="caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>

      <div class="carousel-item ">
        <div class="img">
          <img :src="url" class="d-block w-100" alt="...">
        </div>
        <div class="caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>

      <div class="carousel-item ">
        <div class="img">
          <img :src="url" class="d-block w-100" alt="...">
        </div>
        <div class="caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</center>
</template>

<script>
export default {
  name:'Socities',
  data(){
    return {
      url: 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    }}

}
</script>

<style scoped>
.Socities{
  background-color:rgb(232, 227, 227);
}
img{
  max-height: 40vh;
  max-width: 25%;
  border-radius: 50%;

}
.img{
  margin: 50px;
  display: block;
}
.header{
  position: relative;
  padding:15px;
  margin-top:30px;
}

.header::before{
  content: '';
  width: 130px;
  height:2px;
  position: absolute;
  display: block;
  background:rgb(219, 214, 214);
  left:calc(50% - 65px);
  bottom: 0;
}

.header::after{
  content: '';
  position: absolute;
  display: block;
  width: 40px;
  height:3px;
  left:calc(50% - 22px);
  bottom: 0px;
  background:rgb(102, 153, 255);
}
.caption{
  margin: 50px;
  display: block;
}
.carousel-indicators li
{
  background-color:rgb(102, 153, 255);
}
</style>
