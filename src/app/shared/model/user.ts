import { Lavozim } from "./lavozimlar";

export interface User{
    id: number;
    ism: string;
    familiya: string;
    login: string;
    parol:string;
    aktiv:boolean;
    lavozimlar: Array<Lavozim>;
    image:string;
    
 
}
