import businessStrategy from "../../public/businessStrategy.png"
import SEOStrategy from "../../public/SEOStrategy.png"
import uxui from "../../public/UXUIDesign.png"
import app from "../../public/appDevelopment.png"
import back from "../../public/backEnd.png"
import web from "../../public/webDevelopment.png"
import { IService, IUser } from "@/interfaces"

  
  export const companyInfo: IUser = {
    name: "Software House",
    role: "web designer",
    insights:[{
        id:1,
        name: "Projects",
        number: "27"
    },{
        id:2,
        name: "Campaigns",
        number: "18"
    },{
        id:3,
        name: "Events",
        number: "56"
    },{
        id:4,
        name: "Excellency",
        number: "13"
    },
]
  };
  
  export const services: IService[] = [
    {
      id: 1,
      image: businessStrategy,
      name: "Business Strategy",
      description:
        "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics.",
    },
    {
      id: 2,
      image: uxui,
      name: "UX/UI design",
      description: "UX/UI design involves creating visually appealing and user-friendly interfaces for digital products.",
    },
    {
      id: 3,
      image: app,
      name: "App development",
      description: "App development focuses on creating mobile applications for various platforms and devices.",
    },
    {
      id: 4,
      image: web,
      name: "Websites development",
      description: "Website development involves designing and building responsive websites with compelling user experiences.",
    },
    {
      id: 5,
      image: back,
      name: "Database Development",
      description: "Database development entails designing and managing structured data storage for efficient data retrieval and management.",
    },
    {
      id: 6,
      image: SEOStrategy,
      name: "SEO strategy",
      description: "SEO strategy involves optimizing websites and content to improve search engine visibility and organic traffic.",
    },
  ];