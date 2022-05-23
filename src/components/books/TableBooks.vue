<script lang="ts">
import { defineComponent } from "vue";
import DeleteButton from "./DeleteButton.vue";
import EditButton from "./EditButton.vue";
import SearchButton from "./SearchButton.vue";
import BookService from "./../../services/BookService"
import type Book from "@/models/Book";
export default defineComponent({
  data(){
    return {
      books:[] as Book[],
      isNull:true,
      isSearch:false,
    }
  },
  mounted(){
    this.getAll()
  },
  updated(){
    if(!this.isSearch){
      this.getAll()
    }
  },
  methods:{
    getAll(){
      BookService.getAll().then((value)=>{
        this.books=value.data
        this.isNull=false
      })
    },
    onDelete(event:any){
      this.books=this.books.filter((value:any)=>(
        value.id!==event.id
      ))
    },
    onSearch(event:any){
      if(event!=null){
        this.isSearch=true
      BookService.getTitle(event).then((value)=>{
        this.books=value.data
        console.log(this.books,event)
      })
      }
      else{
        this.isSearch=false
      }
      
    }
  },
  components:{
    DeleteButton,
    EditButton,
    SearchButton
  }
})
</script>
<template>
    <SearchButton @on-search="(event)=>onSearch(event)"/>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody v-if="!isNull">
    <tr v-for="(book,index) in books" :key="index">
      <th scope="row">{{book.id}}</th>
      <td>{{book.title}}</td>
      <td>{{book.author}}</td>
      <td><DeleteButton @delete-book="(book)=>onDelete(book)" :id-book="book.id"/><EditButton :id="book.id"/></td>
    </tr>
  </tbody>
  <div v-if="isNull">Null</div>
</table>
</template>