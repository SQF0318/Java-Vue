<template>
  <div class="person">
    <h1>{{ count }}-----{{ bigSum }}</h1>
    <button @click="add">点击+1</button>
    <br>
    <img v-for="(dogurl, index) in dogList" :key="index" :src="dogurl">
    <br>
    <button @click="addDog">点击添加狗</button>
  </div>
</template>

<!-- vue3写法 -->
<script lang="ts" setup name="Person">
import useDog from '../hooks/useDog';
import useSum from '../hooks/useSum';

const { count, add, bigSum } = useSum();
const { dogList, addDog } = useDog();
</script>
<style scoped>
img {
  height: 100px;
  margin-right: 10px;
}
</style>