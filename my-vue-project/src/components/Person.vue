<template>
    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">年龄+1</button>
        <button @click="showTel">点击查看联系方式</button>
    </div>
</template>

<script setup lang="ts" name="Person234">
import { ref } from 'vue';

let name =ref("");
let age = ref(0);

function changeName() {
    name.value = "张三";
}

function changeAge() {
    age.value++;
}

function showTel() {
    alert("联系方式：13812345678");
}
</script>

<style></style>