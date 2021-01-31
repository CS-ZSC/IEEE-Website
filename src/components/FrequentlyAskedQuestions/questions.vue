
<template lang="html">
  <div class="faq">
    <center class="begin" data-aos="zoom-out-up">
      <h1 class="container-fluid">FAQ</h1>
    </center>

    <section class="container" >
      <div class="card" v-for="item in items" v-bind:key="item.id" >
        <div class="question" :id='item.id' v-on:click="show(item.id)">
          <div class="icon">
            <b-icon icon="arrow-down-circle-fill" class="down"></b-icon>
            <b-icon icon="arrow-up-circle" class="up"></b-icon>
          </div>
          <h3>{{item.q}}</h3>
        </div>
        <div class="answer">
          <p>{{item.a}}</p>
        </div>
      </div>


    </section>

  </div>
</template>

<script>
export default {
  name: 'question',
  data(){
    return{
      items:[
        {
          id:1,
          q:'Lorem Ipsum',
          a:'Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.'
        },
        {
          id:2,
          q:'Lorem Ipsum',
          a:'Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.'
        },
        {
          id:3,
          q:'Lorem Ipsum',
          a:'Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.'
        },
      ],

    }

  },
  methods: {
    show(id){
      let question=document.getElementsByClassName('question');
      let up=document.getElementsByClassName('up');
      let down=document.getElementsByClassName('down');
      for(let i =0;i< question.length; i++){
        if (i==id-1){
          continue;
        }
        else{
          up[i].setAttribute('style','display:none;');
          down[i].setAttribute('style','display:inline-block;');
          question[i].classList.remove('active');
          let answer=question[i].nextElementSibling;
          if(answer.style.maxHeight){
            answer.style.maxHeight=null;
          }

        }
      }

      question=document.getElementById(id);
      console.log(up[id-1]);
      question.classList.toggle('active');
      let answer=question.nextElementSibling;
      if(answer.style.maxHeight){
        answer.style.maxHeight=null;
      }
      else{
        answer.style.maxHeight=answer.scrollHeight+'px';
        }
    },
  },
}
</script>

<style lang="css" scoped>
.card{
  border: none;
}
.begin{
  position: relative;
  height: 500px;
  background-color:rgb(179, 204, 255);
}
 h1{
   position: absolute;
  top:250px;
}

.container{
  margin-top:50px;
}
.question{
  max-width: 100%;
  padding: 0 5px;
  border: 2px solid rgb(102, 153, 255);
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  margin: 10px 0;
}
.icon{
  margin:5px 10px 0 10px;
}
.down{
  width:30px;
  height:30px;
  color:rgb(102, 153, 255);
}
.up{
  width:30px;
  height:30px;
  color:white;
  display:none;
  background-color:rgb(102, 153, 255);
  border-radius: 50%;
}
.question h3{
  font-size: 25px;
  padding:5px 0 0 0;
  color:rgb(102, 153, 255);
}
.answer{
  padding:0 15px;
  border-left: 1px solid rgb(102, 153, 255);
  margin-left:25px;
  font-size: 15px;
  text-align:justify;
  overflow: hidden;
  max-height:0;
  transition: all .6s;
}
.active{
  background:rgb(102, 153, 255);
}
.active h3{
  color:white;
}
.active .up{
  display:inline-block;
}
.active .down{
  display:none;
}
</style>
