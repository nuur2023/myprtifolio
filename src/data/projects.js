import mobile_login from "../../public/images/mobile_login.jpg";
import taskImage from "../../public/images/task_image.jpg"; 

export const projects = [
  {
    id: 1,
    name: "Doogsan Accounting System",
    description: "A full-stack accounting system for Doogsan, features include inventory management, sales tracking, customer management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    type: "web",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    liveUrl: "https://www.doogsan.abaalsoftware.com/login",
    githubUrl: "https://github.com/nuur2023/doogsan",
    playStoreUrl: null,
    featured: true
  },
  {
    id: 2,
    name: "Task Management Web App",
    description: "A web application for task and project management. Built with React JS, .Net Core, MySQL, and Bootstrap.",
    image: taskImage,
    type: "web",
    techStack: ["React JS", ".Net Core", "MySQL", "Bootstrap"],
    liveUrl: null,
    githubUrl: "https://github.com/nuur2023/StoreFE",
    playStoreUrl: "",
    featured: true
  },

  {
    id: 4,
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

]


