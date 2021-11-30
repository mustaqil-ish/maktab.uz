import { Lavozim } from "./lavozimlar";

export interface User{
    login: string;
    id: number;
    ism: string;
    familiya: string;
    aktiv:boolean;
    lavozimlar: Array<Lavozim>;
 
}
