<template>
    <div>
      
       <div id="post">
        
        
           <h2>{{post.title}}</h2>

            <p>---------------------------</p>
        
               <small>{{ new Date().toUTCString() }}</small>
                 <p>
                     {{post.body}}
                         <br>
                         <br>
                   
              </p>
                    <div v-if="likes">
                       <button v-if="likes.isActive" v-on:click="unlike()">unlike({{likes.number}})</button>
                       <button v-else v-on:click="like()"> like ({{likes.number}}) </button>

                    </div>   
                    <div v-else>
                       <button v-on:click="like()"> like (0) </button>

                    </div>
  
        </div>
     <comment/>  
  </div>
     


</template>


<script>

  import  { mapGetters, mapMutations } from 'vuex'
import Comment from './Comment.vue'
   
   export default {
  components: { Comment },
       computed:{
          ...mapGetters("posts",["getPost","getLikes"]),
          post(){
            return this.getPost(this.$route.params.id)
          },
          likes(){
            return this.getLikes(this.$route.params.id)
          }

       },
       methods:{
          ...mapMutations("posts",["likeme","unlikeme"])
         ,
         like(){
            
   

              this.likeme({likes:this.likes,id:this.$route.params.id})

 
          
/*             return this.getPost(this.$route.params.id)
 */         },
          unlike(){
            
            this.unlikeme(this.$route.params.id)

          }
       }
    }

</script>

<style>
  
  #post{
     background-color: rgba(131, 108, 236, 0.61);
     
  }
  #post p{
      padding: 10px;
  }

</style>




