<script lang="ts">
import { defineComponent } from 'vue'
import TableBooks from '../components/books/TableBooks.vue'
  export default defineComponent({
    components:{
      TableBooks 
    }
  })
</script>

<template>
  <main>
    <TableBooks />
  </main>
</template>
