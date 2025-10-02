<template>
detail page
    <div>
        <h2>Detail Page</h2>
        <p>News ID: {{ route.params.id }}</p>
        <p>News Name: {{ route.params.name }}</p>
    </div>
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router';

let route = useRoute();
console.log(route.params);
</script>

<style scoped>
</style>