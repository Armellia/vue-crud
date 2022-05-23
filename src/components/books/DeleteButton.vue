<script lang="ts">
import type Book from "@/models/Book";
import BookService from "@/services/BookService";
import { defineComponent } from "vue";

    export default defineComponent({
        data(){
            return{
                books:'Hello'
            }
        },
        props:['idBook'],
        methods:{
            onDelete(){
                BookService.getId(this.idBook).then((value)=>
                this.books=value.data
            )
                BookService.delete(this.idBook)
                return this.books
            }
        }
    })
</script>
<template>
    <button class="btn btn-danger" type="button" @click="$emit('deleteBook',onDelete())">Delete</button>
</template>