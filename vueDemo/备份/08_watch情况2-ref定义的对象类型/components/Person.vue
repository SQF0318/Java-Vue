<template>
    <div class="person">
        <h1>情况二:监视[ref]定于的[引用类型]数据</h1>
        <h2>姓名:{{ person.name }}</h2>
        <h2>年龄:{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch } from 'vue';


let person = ref({
    name: 'zhang',
    age: 12
});

function changeName() {
    person.value.name += '~';
}
function changeAge() {
    person.value.age += 1;
}
function changePerson() {
    person.value = { name: 'wang', age: 30 };
}
  /* 
    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....） 
  */
watch(person, (newVal, oldVal) => {
    console.log('person对象发生了变化');
    console.log('新值:', newVal);
    console.log('旧值:', oldVal);
}, { deep: true });
</script>
<style scoped></style>