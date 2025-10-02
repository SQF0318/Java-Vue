<template>
    <div class="news">
        <nav class="news-list">
            <!-- <RouterLink v-for="news in newsList" :key="news.id" :to="{ path: '/news/detail' }"> -->
            <RouterLink v-for="news in newsList" :key="news.id" :to="{ name: 'news-detail', params: { id: news.id , name: news.name } }">
            {{ news.name }}<br>
            </RouterLink>
        </nav>
        <div class="news-detail">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">


let newsList = [
    { id: 1, name: 'News1' },
    { id: 2, name: 'News2' },
    { id: 3, name: 'News3' },
]


</script>

<style scoped></style>