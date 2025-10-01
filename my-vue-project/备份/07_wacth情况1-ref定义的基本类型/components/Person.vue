<template>
    <div class="person">
        <h1>情况一:监视[ref]定义的[基本类型]数据</h1>
        <h2>当前求和为: {{ sum }}</h2>
        <button @click="add">点击增加</button>

    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch } from 'vue';

let sum = ref(0);
function add() {
    sum.value++;
}
const stopSumWatch = watch(sum, (newVal, oldVal) => {
    console.log(`sum的值由${oldVal}变为了${newVal}`);
    if (newVal >= 3) {
        stopSumWatch(); // 停止监听
    }
});
</script>
<style scoped></style>