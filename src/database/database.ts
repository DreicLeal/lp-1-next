import businessStrategy from "../../public/businessStrategy.png";
import SEOStrategy from "../../public/SEOStrategy.png";
import uxui from "../../public/UXUIDesign.png";
import app from "../../public/appDevelopment.png";
import back from "../../public/backEnd.png";
import web from "../../public/webDevelopment.png";
import member1 from "../../public/teamMember1.png";
import member2 from "../../public/teamMember2.png";
import member3 from "../../public/teamMember3.png";
import member4 from "../../public/teamMember4.png";
import { IService, IUser } from "@/interfaces";

export const companyInfo: IUser = {
  name: "Software House",
  role: "web designer",
  insights: [
    {
      id: 1,
      name: "Projects",
      number: "27",
    },
    {
      id: 2,
      name: "Campaigns",
      number: "18",
    },
    {
      id: 3,
      name: "Events",
      number: "56",
    },
    {
      id: 4,
      name: "Excellency",
      number: "13",
    },
  ],
  people: [
    {
      id: 1,
      name: "Mahbubur Rahman",
      role: "Front end developer",
      image: member1,
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      role: "Product Designer",
      image: member2,
    },
    {
      id: 3,
      name: "Sakib Sharier",
      role: "Webflow Developer",
      image: member3,
    },
    {
      id: 4,
      name: "Rifat Shikder",
      role: "WP Developer",
      image: member4,
    },
    {
      id: 5,
      name: "Mahbubur Rahman",
      role: "Front end developer",
      image: member1,
    },
    {
      id: 6,
      name: "Tanvir Ahmed",
      role: "Product Designer",
      image: member2,
    },
    {
      id: 7,
      name: "Sakib Sharier",
      role: "Webflow Developer",
      image: member3,
    },
    {
      id: 8,
      name: "Rifat Shikder",
      role: "WP Developer",
      image: member4,
    },
    {
      id: 9,
      name: "Mahbubur Rahman",
      role: "Front end developer",
      image: member1,
    },
    {
      id: 10,
      name: "Tanvir Ahmed",
      role: "Product Designer",
      image: member2,
    },
  ],
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
    description:
      "UX/UI design involves creating visually appealing and user-friendly interfaces for digital products.",
  },
  {
    id: 3,
    image: app,
    name: "App development",
    description:
      "App development focuses on creating mobile applications for various platforms and devices.",
  },
  {
    id: 4,
    image: web,
    name: "Web development",
    description:
      "Website development involves designing and building responsive websites with compelling user experiences.",
  },
  {
    id: 5,
    image: back,
    name: "Data Development",
    description:
      "Database development entails designing and managing structured data storage for efficient data retrieval and management.",
  },
  {
    id: 6,
    image: SEOStrategy,
    name: "SEO strategy",
    description:
      "SEO strategy involves optimizing websites and content to improve search engine visibility and organic traffic.",
  },
];

export const testimonials = [
  {
    id: 1,
    image: member1,
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam sequi atque quod ex vitae repudiandae accusamus sint quam et nemo recusandae omnis doloremque quaerat non, commodi veritatis quisquam neque.",
    name: "Mahbubur Rahman",
    from: "Manchester, Softia, UK",
  },
  {
    id: 2,
    image: member2,
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam sequi atque quod ex vitae repudiandae accusamus sint quam et nemo recusandae omnis doloremque quaerat non, commodi veritatis quisquam neque.",
    name: "Mahbubur Rahman",
    from: "London, Softia, UK",
  },
  {
    id: 3,
    image: member3,
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam sequi atque quod ex vitae repudiandae accusamus sint quam et nemo recusandae omnis doloremque quaerat non, commodi veritatis quisquam neque.",
    name: "Mahbubur Rahman",
    from: "Owener, Softia, UK",
  },
  {
    id: 4,
    image: member4,
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam sequi atque quod ex vitae repudiandae accusamus sint quam et nemo recusandae omnis doloremque quaerat non, commodi veritatis quisquam neque.",
    name: "Mahbubur Rahman",
    from: "Porto, Softia, PT",
  },
  {
    id: 5,
    image: member1,
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam sequi atque quod ex vitae repudiandae accusamus sint quam et nemo recusandae omnis doloremque quaerat non, commodi veritatis quisquam neque.",
    name: "Mahbubur Rahman",
    from: "Lisbon, Softia, PT",
  },
  {
    id: 6,
    image: member2,
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam sequi atque quod ex vitae repudiandae accusamus sint quam et nemo recusandae omnis doloremque quaerat non, commodi veritatis quisquam neque.",
    name: "Mahbubur Rahman",
    from: "Sao Paulo, Softia, BR",
  },
];
