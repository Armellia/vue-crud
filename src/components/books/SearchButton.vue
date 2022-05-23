<script lang="ts">
import type Book from "@/models/Book";
import { defineComponent } from "vue";

export default defineComponent({
  data(){
    return{
      book:[] as Book[],
      title:[] as String[]
    }
    
  },
  emits:{
    onSearch:(event:any)=>{
      return event
    }
  }
})
</script>
<template>
<div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="title">
        <button class="btn btn-outline-success" type="submit" @click="$emit('onSearch',title)">Search</button>
      </div>
</template>