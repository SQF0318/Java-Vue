<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>性别：{{ gender }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeGender">修改性别</button>

    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, reactive, toRefs, toRef } from 'vue';
//data
let person = reactive({ name: "张三", age: 18, gender: '男' })
let { name, gender } = toRefs(person);
let age = toRef(person, 'age');

//methods
function changeName() {
    name.value = "李四";
}

function changeAge() {
    age.value++;
}

function changeGender() {
    if (gender.value === '男') {
        gender.value = '女'
    } else {
        gender.value = '男'
    }
}

</script>
<style scoped></style>