import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../components/Post.vue'
import Posts from '../components/Posts.vue'



Vue.use(VueRouter)

const routes = [
   
    {
      path:"/",
      component:Posts
    },  
     {
      path:"/post/:id",
      component:Post
    }
    
  

]


 const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,routes
})


export default router
