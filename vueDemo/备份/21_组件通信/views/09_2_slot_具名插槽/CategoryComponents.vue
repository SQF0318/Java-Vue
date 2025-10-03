<template>
  <div class="game">
    <slot name="s1">默认内容s1</slot>
    <slot name="s2">默认内容s2</slot>
  </div>
</template>

<script setup lang="ts" name="Game">
</script>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>