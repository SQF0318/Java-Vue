<template>
    <!-- HTML code here -->
    <div class="app">
        <h1> 你好呀！！</h1>
        person组件： <Person></Person>
    </div>
</template>

<script  lang="ts">
import Person from './components/Person.vue';

// JavaScript code here
export default {
    name: "App",
    components: {Person}
}
</script>

<style>
/* CSS code here */
.app {
    text-align: center;
    margin-top: 40vh;
}
</style>