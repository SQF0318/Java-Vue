<template>
    <div class="person">
        <h2>一辆{{ car.brand }}，价格{{ car.price }}</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">
                {{ game.name }}
            </li>
        </ul>
        <button @click="changeGame">修改游戏</button>
        <br>
        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="changeObj">测试</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { reactive } from 'vue';
//data
let car = reactive({ brand: "宝马", price: 1000000 })
let games: any[] = reactive([{ id: 1, name: "王者荣耀" }, { id: 2, name: "和平精英" }, { id: 3, name: "英雄联盟" }]);
let obj =reactive({a:{b:{c:666}}})
//methods
function changePrice() {
    car.price += 200000;
}
function changeGame() {
    console.log(games[0]);
    games[0].name = "LOL";
}
function changeObj() {
    obj.a.b.c = 999;
}


</script>
<style scoped></style>