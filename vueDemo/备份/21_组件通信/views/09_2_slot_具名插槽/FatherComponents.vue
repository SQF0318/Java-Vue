<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <CategoryComponents>
        <template v-slot:s1>
          <h2>游戏列表</h2>
        </template>
        <template v-slot:s2>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>

      </CategoryComponents>

      <CategoryComponents>
        <template v-slot:s1>
          <h2>美食图片</h2>
        </template>
        <template v-slot:s2>
          <img :src="imgUrl" alt="">
        </template>
      </CategoryComponents>

      <CategoryComponents>
        <template #s1>
          <h2>视频列表</h2>
        </template>
        <template #s2>
          <video :src="videoUrl" controls></video>
        </template>

      </CategoryComponents>

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { reactive, ref } from 'vue';
import CategoryComponents from './CategoryComponents.vue'
const games = reactive([
  { id: 'asgytdfats01', name: '英雄联盟' },
  { id: 'asgytdfats02', name: '王者农药' },
  { id: 'asgytdfats03', name: '红色警戒' },
  { id: 'asgytdfats04', name: '斗罗大陆' }
])
const imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg');
const videoUrl = ref('https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4');

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>