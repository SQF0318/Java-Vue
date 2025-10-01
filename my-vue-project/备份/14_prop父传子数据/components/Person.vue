<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
import { defineProps } from 'vue'
import type { PersonList } from '../types';
//第一种写法:仅接受
// const x = defineProps(["list"])
// console.log(x.list);

//第二种写法:接收+限制类型
// const props = defineProps<{ list: PersonList }>();
// console.log(props.list);

//第三种写法:接收+限制类型+默认值+限制必要性
let propsWithDefault = withDefaults(defineProps<{ list?: PersonList }>(),
    { list: () => [{ id: 5, name: '小猪佩奇', age: 18 }] }
);
console.log(propsWithDefault.list);
</script>