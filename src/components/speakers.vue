<template>
    <div>
        <div class="background padding">
            <a name="speakers"></a>
            <b-container>
            <h2 class="center margin" data-aos="fade-down">Our Speakers</h2>
            <div class="spacing">
            
               <b-row class="flex center">
                   
                   <div v-for="speaker in speakers" v-bind:key="speaker.index" class="zooming">
                    <b-card
                     data-aos="flip-left" 
                    :img-src="speaker.image"
                    
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 center "
                   
                   >
                        <b-card-text>
    
                            <h3>{{speaker.name}}</h3>
                            {{speaker.brief}}

                        </b-card-text>
                    </b-card>
                   </div>
                
                 </b-row>

          
        </div>
        
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    name:"speakers",
    props:["speakers",]
}
</script>
<style scoped>
.background{background-color: darkgray;}
.zooming:hover{transform: scale(1.08);}
.card{margin-left: 15px;border: 0;padding: 0;}
</style>