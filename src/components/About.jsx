import { motion } from 'framer-motion'
import { Code, Target, Users, Lightbulb } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const features = [
    {
      icon: Code,
      title: "What I Do",
      description: "I transform ideas into reality through clean, scalable code and innovative solutions.",
      items: personalInfo.whatIDo.slice(0, 3)
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "I specialize in solving complex technical challenges and building robust systems.",
      items: [
        "Architect scalable solutions",
        "Optimize performance",
        "Debug and troubleshoot"
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "I work effectively in teams and communicate clearly with stakeholders.",
      items: personalInfo.softSkills.slice(0, 3)
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "I stay updated with latest technologies and best practices in software development.",
      items: [
        "Follow tech trends",
        "Learn new frameworks",
        "Improve skills constantly"
      ]
    }
  ]

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and what drives me as a Software Engineer
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Biography
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Code className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {personalInfo.yearsOfExperience} Years of Experience
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Building scalable applications
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Target className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Problem Solver
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transforming challenges into solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {personalInfo.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {feature.description}
              </p>
              <ul className="space-y-2 text-left">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About


