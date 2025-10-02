<template>
detail page
    <div>
        <h2>Detail Page</h2>
        <p>News ID: {{ id }}</p>
        <p>News Name: {{ name }}</p>
    </div>
</template>


<script setup lang="ts">
defineProps(['id', 'name'])
</script>

<style scoped>
</style>