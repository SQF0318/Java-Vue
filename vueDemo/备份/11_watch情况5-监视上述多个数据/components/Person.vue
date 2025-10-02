<template>
    <div class="person">
        <h1>情况五：监视上述的多个数据</h1>
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

// 监视，情况五：监视上述的多个数据
watch([() => person.name,() => person.cars], (newVal, oldVal) => {
    console.log('变化了', newVal, oldVal)
}, { deep: true }
)

</script>

<style scoped></style>