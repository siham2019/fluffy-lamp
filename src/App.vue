<template>
  <div id="app">


    
    
    <h1> Posts</h1>

<!--     <post/>
    

       <comment/> -->

     <router-view></router-view>
  </div>
</template>

<script>
/* import Comment from './components/Comment.vue'
import Post from './components/Post.vue'
 */


export default {
  name:"App",

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
