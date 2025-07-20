import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: "AI/ML Frameworks",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "OpenCV", level: 90 },
      { name: "YOLO", level: 95 },
      { name: "Scikit-learn", level: 85 }
    ]
  },
  {
    title: "NLP & Data Analytics",
    skills: [
      { name: "Natural Language Processing", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib/Seaborn", level: 80 },
      { name: "Statistical Analysis", level: 75 }
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "MATLAB", level: 70 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    title: "Embedded Systems & IoT",
    skills: [
      { name: "Raspberry Pi", level: 90 },
      { name: "Arduino", level: 85 },
      { name: "MQTT", level: 80 },
      { name: "ROS", level: 85 },
      { name: "Microcontrollers", level: 80 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 80 },
      { name: "PCB Design", level: 65 },
      { name: "3D Modeling", level: 60 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Expertise across the full stack of AI/ML and embedded systems development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-primary/20 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                          }}
                          viewport={{ once: true }}
                        >
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-muted/50"
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Professional Experience
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <strong>AI/ML Engineer Intern:</strong> Developed real-time computer vision models and automation systems 
                for intelligent traffic control and smart waste segregation. Gained hands-on experience in YOLO, 
                spectral sensing, embedded systems, and model deployment on edge devices, improving system efficiency by over 30%.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-blue">90%+</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-pink">30%+</div>
                  <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};