<script lang="ts">
import type Book from "@/models/Book";
import router from "@/router";
import BookService from "@/services/BookService";
import { defineComponent } from "vue";

export default defineComponent({
    data(){
        return{
            book:{} as Book
        }
    },
    methods:{
        onSubmit(e:any){
            BookService.create(this.book)
            router.push({path:'/'})
        }
    }
})
</script>
<template>
    <div class="container px-5 my-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="card border-0 rounded-3 shadow-lg">
        <div class="card-body p-4">
          <div class="text-center">
            <div class="h1 fw-light">Add Book</div>
          </div>

          <form id="contactForm" data-sb-form-api-token="API_TOKEN" @submit="onSubmit">

            <!-- Name Input -->
            <div class="form-floating mb-3">
              <input class="form-control" id="title" type="text" placeholder="Name" v-model="book.title" name="title"/>
              <label for="title">Title</label>
            </div>

            <!-- Email Input -->
            <div class="form-floating mb-3">
              <input class="form-control" id="author" type="text" placeholder="Email Address" v-model="book.author" name="author"/>
              <label for="author">Author</label>
            </div>


            <!-- Submit button -->
            <div class="d-grid">
              <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
            </div>
          </form>
          <!-- End of contact form -->

        </div>
      </div>
    </div>
  </div>
</div>

</template>