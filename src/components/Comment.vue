

<template>
    <div>
        <p>------------------------------------</p>
         
                 <h2>comments </h2>
                <input type="text">
                <button>add comment</button>
       <p>----------------------------------------</p> 
      <div class="comment" v-for="item in 5" :key="item.id">
              <p>Lorem ipsum dolor sit amet.</p>
              <small>{{ new Date().toUTCString() }}</small>
                 <br>
                <br>
               <button> like (0) </button>
      </div>
      

    </div>

</template>


<style>
 
 .comment{
     padding: 5px;
     margin-bottom: 5px;
   background-color: rgb(99, 99, 121);
   color: rgb(218, 228, 247);
 }

</style>