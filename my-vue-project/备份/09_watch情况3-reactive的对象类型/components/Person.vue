<template>
    <div class="person">
        <h1>情况三:监视[reactive]定于的[引用类型]数据</h1>
        <h2>姓名:{{ person.name }}</h2>
        <h2>年龄:{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改</button>
        <br>
        <button @click="test">测试</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { reactive, watch } from 'vue';

let person = reactive({
    name: 'zhang',
    age: 12
});
let obj = reactive({
    a: { b: { c: 1 } }
})

function changeName() {
    person.name += '~';
}
function changeAge() {
    person.age += 1;
}
function changePerson() {
    person = Object.assign(person, { name: 'wang', age: 30 });
}

function test() {
    obj.a.b.c = 888
}
// 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的，且无法关闭
watch(person, (newVal, oldVal) => {
    console.log('person对象发生了变化');
    console.log('新值:', newVal);
    console.log('旧值:', oldVal);
});

watch(obj, (newValue, oldValue) => {
    console.log('Obj变化了', newValue, oldValue)
})
</script>
<style scoped></style>