<template>
    <div class="dogpic">
        <img v-for="dogurl in dogPicList" :key="dogurl.id" :src="dogurl.message">
        <br>
        <button @click="addDogPic">添加动物</button>
    </div>

</template>

<script setup lang="ts" name="Count">
import { storeToRefs } from 'pinia';
import { useDogpicStore } from '../store/dogpic';


const dogpicStore = useDogpicStore();
const { dogPicList } = storeToRefs(dogpicStore)
const addDogPic = () => {
    dogpicStore.addDogPic();
}

dogpicStore.$subscribe((mutation, state) => {
    localStorage.setItem('dogPicList', JSON.stringify(state.dogPicList));
})

</script>

<style scoped>
img {
    height: 100px;
    margin-right: 10px;
}
</style>