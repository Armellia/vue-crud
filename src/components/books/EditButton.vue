<script lang="ts" setup>
import { defineComponent } from 'vue';
import {RouterLink}  from 'vue-router'
    defineProps({
        id:Number
    })
</script>
<template>
    <button class="btn btn-warning" type="button"><RouterLink :to="'/edit/'+id">Edit</RouterLink></button>
</template>