export class Person{
    id:number;
    name:string;
    surname:string;
    avatar:string;
    age:number;
    post:string;
    friends:number;
}
export class Persons{
    id:number;
    name:string;
    surname:string;
    avatar:string;
    age:number;
    post:string;
    friends:Friends;      
}

export class Friends{
    id:number;
    name:string;
    surname:string;
    avatar:string;
    age:number;
    post:string;
    friends:Person;  
}