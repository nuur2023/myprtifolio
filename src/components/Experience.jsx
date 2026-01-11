import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { workExperience, education } from '../data/experience'

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Briefcase className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-gray-900 z-10" />

                  {/* Content Card */}
                  <div className="card">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.role}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <GraduationCap className="text-purple-600 dark:text-purple-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900 z-10" />

                  {/* Content Card */}
                  <div className="card">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white">
                        Key Achievements:
                      </p>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience


