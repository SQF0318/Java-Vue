import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCountStore = defineStore('count', () => {

    //state
    let count = ref(0);
    //action
    
    //增加
    const increment = (value: number) => {
       count.value += value;
    }
    
    //减少
    const decrement = (value: number) => {   
         count.value -= value;
    }

    const bigCount = computed(() => {
        return count.value * 100;
    });

    //return
    return {count,bigCount,increment,decrement};

    
})


