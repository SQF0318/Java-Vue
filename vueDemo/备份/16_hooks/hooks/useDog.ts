import axios from "axios";
import { onMounted, reactive } from "vue";

export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_6015.jpg'
    ]);
    const addDog = async () => {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            dogList.push(result.data.message);
        } catch (error) {
            alert(error)
        }

    }
    onMounted(() => {
        addDog();
    })
    return { dogList, addDog };


}