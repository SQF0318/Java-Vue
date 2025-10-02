<template>
    <div class="person">
        <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
        <h2>姓名:{{ person.name }}</h2>
        <h2>年龄:{{ person.age }}</h2>
        <h2>车1:{{ person.cars.c1 }}</h2>
        <h2>车2:{{ person.cars.c2 }}</h2>
        <h2>车3:{{ person.cars.c3 }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改车1</button>
        <button @click="changeC2">修改车2</button>
        <button @click="changeCar">修改车</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { reactive, watch } from 'vue';

//data
let person = reactive({ name: 'zhang', age: 12, cars: { c1: '奔驰', c2: '宝马', c3: '奥迪' } });

//methods
const changeName = () => {
    person.name += '~';
}

const changeAge = () => {
    person.age += 1;
}
const changeC1 = () => {
    person.cars.c1 += '++';
}
const changeC2 = () => {
    person.cars.c2 += '++';
}
const changeCar = () => {
    person.cars = { c1: '法拉利', c2: '兰博基尼', c3: '玛莎拉蒂' };
}
// 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
watch(() => person.name, (newVal, oldVal) => {
    console.log('name变化了', newVal, oldVal)
})

// 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
watch(() => person.cars, (newVal, oldVal) => {
    console.log('name变化了', newVal, oldVal)
}, { deep: true }
)

</script>

<style scoped></style>