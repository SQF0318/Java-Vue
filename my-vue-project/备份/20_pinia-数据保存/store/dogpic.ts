import axios from "axios";
import { defineStore } from "pinia";
import { reactive ,ref} from "vue";
import { v4 as uuidv4 } from 'uuid'
interface DogPic {
    id: string;
    message: string;
}
export const useDogpicStore = defineStore('dogpic', () => {

    //state
    let dogPicList = reactive<DogPic[]>(
        JSON.parse(localStorage.getItem("dogPicList") || "[]")    
    );

    //actions
    async function addDogPic() {
        let { data: { message } } = await axios.get("https://dog.ceo/api/breed/pembroke/images/random");
        let obj : DogPic= { id: uuidv4(), message }
        dogPicList.push(obj);
    }

    //getters

    return { dogPicList ,addDogPic};
})

