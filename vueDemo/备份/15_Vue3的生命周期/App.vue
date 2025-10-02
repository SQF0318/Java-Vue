<!-- 父组件App.vue -->
<template>
    <Person v-if="showPerson"/>
</template>

<script lang="ts" setup name="App">

import { ref } from 'vue';
import Person from './components/Person.vue'
let showPerson=ref(true);

</script>
