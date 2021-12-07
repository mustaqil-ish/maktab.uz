import { Lavozim } from "./lavozimlar";

export interface User{
    id: number;
    login: string;
    parol:string;
    ism: string;
    familiya: string;
    aktiv:boolean;
    lavozimlar: Array<Lavozim>;
 
}
