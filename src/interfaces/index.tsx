import { StaticImageData } from "next/image";

export interface IInsights {
    id: number;
    name: string;
    number: string;
}

export interface IService {
    id: number;
    image: StaticImageData;
    name: string;
    description: string;
  }
  
  export interface IUser {
    name: string;
    role: string;
    insights: IInsights[]
  }