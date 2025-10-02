export interface Persons {
    id : number
    name: string;
    age: number;
}

//一个自定义类型
export type PersonList = Array<Persons>;