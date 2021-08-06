
<template>

   <div>
    
       <div v-for="item in getPosts" :key="item.id" class="posts">
                 
              <h3> {{item.title}} </h3>
                <hr>
              <small>{{new Date().toUTCString()}}</small>
              <p>{{item.body.slice(0,45)}}... <a href="#">view more</a></p>

       </div>

   </div>

</template>

<script>
export default {
  created(){
     this.$store.dispatch("posts/initState")    
  },
  computed:{
    getPosts(){
      return this.$store.state.posts.posts
    }
  }
}
</script>

<style>
    
    .posts{
       padding: 15px;
       margin: 12px;
       background-color: rgb(36, 70, 70);
       border-radius: 25px;
    }

</style>