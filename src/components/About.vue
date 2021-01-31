<template>
    <div>
       
        <div class="about" >
           <a name="about"></a>  
        <b-container >
            
        <b-row >
            <div class="col-sm-5"><h3 class="head">About {{name}}</h3>
            <p class="para">{{about}}</p>
            </div>
            <div class="col-sm"><h3 class="head">Where</h3>
            <p class="para">{{place}} </p></div>
            <div class="col-sm"><h3 class="head">When</h3>
            <p class="para" v-for="date in dates" :key="date">{{date}}</p></div>
        </b-row>
        </b-container>
        </div>
        <div class="spacing">
            <b-container >
               <b-row class="flex center">
     
                 <b-card
                    overlay
                    img-src="https://picsum.photos/600/300/?image=25"
                    title="VISION"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 center zooming "
                    data-aos="fade-down-right"
                   >
                    <b-card-text>
                    {{vision}}
                    </b-card-text>
                </b-card>
                   
                 <b-card
                    overlay
                    img-src="https://picsum.photos/600/300/?image=25"
                    title="MISSION"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2  center zooming"
                    data-aos="fade-down-right">
                    <b-card-text>
                    {{mission}}
                    </b-card-text>
                </b-card>
                  
                <b-card
                    overlay
                    img-src="https://picsum.photos/600/300/?image=25"
                    title="GOALS"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2  center zooming "
                    data-aos="fade-down-right">
                    <b-card-text>
                        {{goals}}
                    </b-card-text>
                </b-card>
                   
               </b-row>
            </b-container>
            
        </div>
        <div class="spacing " >
            <b-container class="bv-example-row grid">
        <b-row class="spacing">
            <div data-aos="fade-down-left" data-aos-duration="3400" class="col-sm"><h3 class="center"><b-icon-tv class="size"></b-icon-tv></h3>
            <h2 class="center padding">Sessions</h2>
            <p class="center">{{session}}</p>
            </div>
            <div data-aos="fade-down-left" data-aos-duration="3400" class="col-sm"><h3 class="center" ><b-icon-briefcase-fill class="size"></b-icon-briefcase-fill></h3>
            <h2 class="center padding" >Workshops</h2>
            <p class="center">{{workshop}} </p></div>
            <div data-aos="fade-down-left" data-aos-duration="3400" class="col-sm"><h3 class="center"><b-icon-receipt class="size"></b-icon-receipt></h3>
            <h2  class="center padding">Case Study</h2>
            <p class="center">{{casestudy}}</p></div>
        </b-row>
        </b-container>
        
        </div>
        
        </div>
    
</template>
<script>

export default {
    name:"about",
    props:["about","name","place","dates","vision","mission","goals","session","workshop","casestudy"],
   
}
</script>
<style scoped>

.para{text-align: justify;font-size: 13px;color: rgb(255,255,255);}
.head{color: rgb(255,255,255);}
.about{background-color: rgb(0,0,64);padding: 40px 0 10px;}
.spacing{margin: 40px 20px}
.padding{padding: 10px 0 0}
.zooming:hover{transform: scale(1.2);}
.card{padding: 0;margin-left: 15px;}
</style>