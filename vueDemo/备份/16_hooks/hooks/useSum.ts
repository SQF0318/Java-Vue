import { computed, onMounted, ref } from "vue";

export default function () {
    //---Start----
    //data
    let count = ref(0);
    let bigSum= computed(()=>count.value*100);
    //---End----

    //---Start----
    //methods
    const add = () => {
        count.value++;

    }
    //---End----
    onMounted(() => {
        add();
    })
    
    return { count, add ,bigSum};
}