

<template>
    <div>
        <p>------------------------------------</p>
         
                 <h2>comments </h2>
                <input type="text">
                <button>add comment</button>
       <p>----------------------------------------</p> 
      <div class="comment" v-for="item in comments" :key="item.id">
              <h4>{{item.name}}</h4>
              <p>{{item.body}}</p>
              <small>{{ new Date().toUTCString() }}</small>
                 <br>
                <br>
               <button @click="likeComment()"> 
                   {{whichOne(item.id)}} ( {{ getLikes(item.id) }} )
                 </button>
      </div>
      

    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   computed:{
     ...mapGetters("comments",["getComment","getLikess"]),
     comments(){
       return this.getComment;
     },
     getLikes(id){
        return this.getLikess(id)
     },
     whichOne(id){
        return this.getLikes(id).number==0?'like ':'unlike ' 
     }
   },
    methods:{
      ...mapActions("comments",["getCurrent"]),
      likeComment(){
        console.log("like ^__^");
      }
    },
    beforeMount(){
       this.getCurrent(this.$route.params.id) 
   }  
}

</script>


<style>
   
 .comment{
     padding: 5px;
     margin-bottom: 5px;
   background-color: rgb(99, 99, 121);
   color: rgb(218, 228, 247);
 }

</style>