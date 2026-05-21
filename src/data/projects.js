import mobile_login from "../../public/images/mobile_login.jpg";
import taskImage from "../../public/images/task_image.jpg"; 
import abaalbook from "../../public/images/abaalbook.jpg"; 
import gasImg from "../../public/images/gas.jpg";
import gas_app from "../../public/images/gas_app.jpg";

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
    name: "Task Management Web App",
    description: "A web application for task and project management. Built with React JS, .Net Core, MySQL, and Bootstrap.",
    image: taskImage,
    type: "web",
    techStack: ["React JS", ".Net Core", "MySQL", "Bootstrap"],
    liveUrl: null,
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
    name: "Loan and Purchase Invoices Management App",
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
    image: gasImg,
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
    name: "Gas Station Mobile App",
    description: "A mobile application for gas station management, features include inventory management, sales tracking, customer management, Dipping balance tracking, and Station Overview dashboard Plus Multi station support and many more features.",
    image: gas_app,
    type: "mobile",
    techStack: ["Flutter", "GetX", "Dart"],
    liveUrl: "",
    githubUrl: null,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.abaalsoftware.gas_station",
    featured: false
  }
]


