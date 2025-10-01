<template>
    <div class="person">
        姓：<input type="text" v-model="firstName" /><br>
        名：<input type="text" v-model="lastName" /><br>
        <p>全名：{{ fullName }}</p><br>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, computed } from 'vue';
let firstName: any = ref('zhang');
let lastName: any = ref('san');
// 计算属性,只读不可修改
/* let fullName = computed(() => {
    console.log('fullName computed');
    let firstNameUpper = firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1);
    let lastNameUpper = lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1);
    return firstNameUpper + " " + lastNameUpper;
}); */
// 计算属性,可读可写
let fullName = computed({
    get() {
        console.log('fullName computed');
        let firstNameUpper = firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1);
        let lastNameUpper = lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1);
        return firstNameUpper + " " + lastNameUpper;
    },
    set(val) {
        console.log(val);
        let [first, last] = val.split(" ");
        firstName.value = first;
        lastName.value = last;
    }
});

//方法
function changeFullName() {
    fullName.value = 'Li Si';
}
</script>
<style scoped></style>