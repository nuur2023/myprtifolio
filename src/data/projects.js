import mobile_login from "/images/mobile_login.jpg";
import taskImage from "/images/task_image.jpg"; 
import abaalbook from "/images/abaalbook.jpg"; 
import abaalbookfe from "/images/abaalbookfe.jpg"; 
import hmar_cargo from "/images/hmar_cargo.jpg";
import gas_app from "/images/gas_bg.jpg";
import xmr from "/images/xmr.jpg";

export const projects = [
  // {
  //   id: 1,
  //   name: "Doogsan Accounting System",
  //   description: "A full-stack accounting system for Doogsan, features include inventory management, sales tracking, customer management, and admin dashboard.",
  //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  //   type: "web",
  //   techStack: ["React js","Tailwind CSS", ".Net Core 8", "MySQL"],
  //   liveUrl: "https://www.doogsan.abaalsoftware.com/login",
  //   githubUrl: "",
  //   playStoreUrl: null,
  //   featured: true
  // },
  {
    id: 1,
    name: "Hamar Cargo Web App",
    description: "A web application for Hamar Cargo, a logistics company. Features include shipment tracking, order management, customer management, and an admin dashboard.",
    image: hmar_cargo,
    type: "web",
    techStack: ["React JS", ".Net Core", "MySQL", "Css and JS"],
    liveUrl: "https://hamarcargo.com/",
    githubUrl: null,
    playStoreUrl: "",
    featured: true
  },
  {
    id: 2,
    name: "Water Supply Mobile App",
    description: "A water supply mobile application connecting customers with water suppliers. Features include real-time order tracking, multiple payment options, water supplier ratings, and push notifications.",
    image: mobile_login,
    type: "mobile",
    techStack: ["Flutter", "GetX", "Dart"],
    liveUrl: null,
    githubUrl: null,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.abaal.kobciye",
    featured: false
  },
  {
    id: 3,
    name: "Mobile Invoice Management App",
    description: "A mobile application for managing loan and purchase invoices. Features include invoice creation, payment tracking, due date reminders, and financial reporting.",
    image: abaalbook,
    type: "mobile",
    techStack: ["Flutter", "GetX", "Dart"],
    liveUrl: null,
    githubUrl: null,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.abaalsoftware.abaalbook",
    featured: false
  },
  {
    id: 4,
    name: "Gas Station Management System",
    description: "A full-stack accounting system for Gas Stations, features include inventory management, sales tracking, customer management, Employees Management, Pay Rolls and Admin dashboard Plus Multi station support and many more features.",
    image: gas_app,
    type: "web",
    techStack: ["React js","Tailwind CSS", ".Net Core 8", "MySQL"],
    liveUrl: "https://gasstationfe.abaalsoftware.com/login",
    githubUrl: null,
    playStoreUrl: null,
    featured: true
  },
  // Mobile gas station // https://play.google.com/apps/testing/com.abaalsoftware.gas_station
  {
    id: 5,
    name: "AbaalBook",
    description: "Web application for managing Store and invoices.",
    image: abaalbookfe,
    type: "web",
    techStack: ["React js","Tailwind CSS", ".Net Core 8", "MySQL"],
    liveUrl: "https://abaalbookfe.runasp.net/",
    githubUrl: null,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.abaalsoftware.abaalbook",
    featured: false
  },
  {
    id: 6,
    name: "New Version of Hamar Cargo Web App",
    description: "An updated version of the Hamar Cargo web application with improved features and functionality.",
    image: xmr,
    type: "web",
    techStack: ["React js","Tailwind CSS", ".Net Core 8", "MySQL"],
    liveUrl: "https://xamarcargo.netlify.app/",
    githubUrl: null,
    playStoreUrl: null,
    featured: false
  }
]


