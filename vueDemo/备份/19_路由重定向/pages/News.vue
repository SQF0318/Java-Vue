<template>
    <div class="news">
        <nav class="news-list">
            666
            <!-- <RouterLink v-for="news in newsList" :key="news.id" :to="{ path: '/news/detail' }"> -->
            <RouterLink v-for="news in newsList" :key="news.newId" :to="{ name: 'news-detail', params: { id: news.newId , name: news.newName } }">
            {{ news.newName }}<br>
            </RouterLink>
        </nav>
        <div class="news-detail">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';



let newsList = reactive([
    { newId: 1, newName: 'News1' },
    { newId: 2, newName: 'News2' },
    { newId: 3, newName: 'News3' },
])


</script>

<style scoped></style>