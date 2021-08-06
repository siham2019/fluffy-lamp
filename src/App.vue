<template>
  <div id="app">


    
    
    <h1> Posts</h1>
    <posts/>
<!--     <post/>
    

       <comment/> -->


  </div>
</template>

<script>
/* import Comment from './components/Comment.vue'
import Post from './components/Post.vue'
 */
import Posts from './components/Posts.vue'

export default {
  name:"App",
  components :{
/*     Post,
    Comment
     */Posts
  }
}
</script>


<style>
   body{
         margin: 0;
             background-color: black;
        padding: 10px;
   }
  #app{
    text-align: center;
    color: rgb(208, 208, 218);
  }
</style>
