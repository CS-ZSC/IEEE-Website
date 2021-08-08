
<template lang="html">
  <div class="faq">>
    <center class="background">
      <img :src="url">
    </center>

    <section class="container" >
      <div class="card" v-for="item in items" v-bind:key="item.id" >
        <div class="question" :id='item.id' v-on:click="show(item.id)">
          <b-icon icon="question-circle" class='icon' ></b-icon>
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
      url:'https://cdn.searchenginejournal.com/wp-content/uploads/2018/09/25-of-the-Best-Examples-of-Effective-FAQ-Pages-760x400.png',
    }
  },

  methods: {
    show(id){
      let question=document.getElementsByClassName('question');

      for(let i =0;i< question.length; i++){
        if (i==id-1){
          question[i].classList.toggle('active');
          let answer=question[i].nextElementSibling;
          if(answer.style.maxHeight){
            answer.style.maxHeight=null;
          }
          else{
            answer.style.maxHeight=answer.scrollHeight+'px';
            }
        }
        else{
          question[i].classList.remove('active');
          let answer=question[i].nextElementSibling;
          if(answer.style.maxHeight){
            answer.style.maxHeight=null;
          }
        }
      }
    },
  },
}
</script>

<style lang="css" scoped>
.background img{
  width: 100%;
  height:500px;
  display:block;
}
.card{
  border: none;
}
.container{
  margin-top:50px;
  margin-bottom: 50px;
}
.question{
  max-width: 100%;
  padding: 0 5px;
  border: 2px solid #00629B;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  margin: 10px 0;
}
.icon{
  margin:5px 10px 0 10px;
  width:30px;
  height:30px;
  color:#00629B;
}

.question h3{
  font-size: 25px;
  padding:5px 0 0 0;
  color:#00629B;
}
.answer{
  padding:0 15px;
  border-left: 1px solid #00629B;
  margin-left:25px;
  font-size: 15px;
  text-align:justify;
  overflow: hidden;
  max-height:0;
  transition: all .6s;
}
.active{
  background:#00629B;
}
.active h3{
  color:white;
}
.active .icon{
  color:white;
}
</style>
