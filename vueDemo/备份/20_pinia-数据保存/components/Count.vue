<template>
    <div class="count">
        <h2>当前求和为：{{ count }}----{{ bigCount }}</h2>
        <br>
        <select v-model.number="num1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="minus">-</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue';
import { useCountStore } from '../store/count';
import { storeToRefs } from 'pinia';
let num1 = ref(1);
const countStore = useCountStore();
// console.log(countStore);
let { count,bigCount } = storeToRefs(countStore);

const add = () => {
    countStore.increment(num1.value);
}

const minus = () => {
    countStore.decrement(num1.value);
}
</script>

<style scoped></style>