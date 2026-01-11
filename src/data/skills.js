import { 
  Code2, 
  Smartphone, 
  Server, 
  Palette,
  Database,
  Cloud,
  GitBranch,
  Shield
} from 'lucide-react'

export const skillsCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: Code2,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Tailwind CSS', level: 80 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    icon: Server,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'PHP', level: 80 },
      { name: 'ASP.NET Core', level: 85 },
      { name: 'C#', level: 85 },
      { name: 'Java & Spring Boot', level: 75 },
      { name: 'RESTful APIs', level: 90 }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    icon: Smartphone,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'Dart', level: 85 },
      { name: 'Mobile App Development', level: 90 },
      { name: 'Cross-platform Development', level: 85 }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Design',
    icon: Palette,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    skills: [
      { name: 'SQL & MySQL', level: 85 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe Illustrator', level: 75 },
      { name: 'Adobe Photoshop', level: 75 },
      { name: 'Graphic Design', level: 80 }
    ]
  }
]
