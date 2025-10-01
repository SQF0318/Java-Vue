<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}，价格{{ car.price }}</h2>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeBrand">修改汽车品牌</button>
        <button @click="changeCar">修改汽车</button>
        <br>
        <h2>总价：{{ sum }}</h2>
        <button @click="changeSum">增加总价</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, reactive } from 'vue';
//data
let car = reactive({ brand: "宝马", price: 1000000 })
let sum = ref(0)

//methods
function changePrice() {
    car.price += 10000;
}

function changeBrand() {
    car.brand = "奔驰";
}

function changeCar() {
    //car = { brand: "BYD", price: 100000 };//这么写页面不刷新
    //car = reactive({ brand: "BYD", price: 100000 });//这么写页面不刷新
    //这么写页面刷新
    Object.assign(car, { brand: "BYD", price: 100000 });
}
function changeSum() {
    sum.value++;
}
</script>
<style scoped></style>