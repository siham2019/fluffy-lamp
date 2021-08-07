import axios from '../api/index'
import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex)

const comments={
   namespaced:true,
   state:()=>({
      comments:[],
      likes:[]
   }),
   getters:{
      getComment(state){
        return state.comments
      }
   },
   mutations:{
     setComment(state,data){
        state.comments=data
     }
   },
   actions:{
      getCurrent({commit},id){
          axios.get("/post/"+id+"/comments").then(res=>{
              
            commit("setComment",res.data)

          }).catch(err=>console.log(err))
      }
   }
}


const posts={
    namespaced:true,
    state:()=>({
        posts:[],
        likes:[{
           postId:1,
           number:3,
           isActive:true
        },{
         postId:2,
         number:3,
         isActive:false
      }]
   }),
    getters:{
       getPost({posts}){
           return (id)=> {
    
               return posts.find(e=>e.id==id)
            }
       },
       getLikes({likes}){
         return (id)=> {
    
            return likes.find(e=>e.postId==id)
         }
       }
    },
    mutations:{
 
       initState(state,payload){
            state.posts=payload
       },
       like(state,{likes,id}){
            
            if (likes) {

               let payload = likes
               let like = state.likes.filter(e=>e.postId!==payload.id)
               payload.number++;
               payload.isActive=true
               like.push(payload)
               state.likes=like; 
            
            }
            else{
               let like={
                  postId:id,
                  number:1,
                  isActive:true
               }
               state.likes.push(like); 
            }
    
         }
 
    },
    actions:{
    
       initState({commit}){
 
         axios.get("/posts").then(response=>{
              
             commit("initState",response.data)
 
         }).catch(err=>console.log(err))     
       
      }
 
}}

const store = new vuex.Store({
  
   modules:{
       posts,
       comments
   }
  

})


export default store;