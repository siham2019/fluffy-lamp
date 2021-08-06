import axios from '../api/index'
import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex)

const posts={
    namespaced:true,
    state:{
        posts:[]
    },
    mutations:{
 
       initState(state,payload){
            state.posts=payload
       }
 
    },
    actions:{
    
       initState({commit}){
 
         axios.get("/").then(response=>{
              
             commit("initState",response.data)
 
         }).catch(err=>console.log(err))     
       
      }
 
}}

const store = new vuex.Store({
  
   modules:{
       posts
   }
  

})


export default store;