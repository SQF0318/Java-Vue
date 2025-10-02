<!-- 父组件App.vue -->
<template>
    <Person :list = "personList" />
</template>

<script lang="ts" setup name="App">
import { reactive } from 'vue';
import Person from './components/Person.vue'
import type { PersonList } from './types';


let personList = reactive<PersonList>([ 
    {id: 1, name: '张三', age: 25},
    {id: 2, name: '李四', age: 30},
    {id: 3, name: '王五', age: 28}
])
console.log(personList);

</script>
