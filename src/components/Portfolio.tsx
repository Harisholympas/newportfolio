import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';
import { ProjectCard } from './ProjectCard';
import { SkillsSection } from './SkillsSection';
import { ContactSection } from './ContactSection';
import { QuoteSection } from './QuoteSection';
import { AIChat } from './AIChat';

const projects = [
  {
    id: 1,
    title: "Intelligent Traffic Management System",
    description: "AI-driven adaptive traffic management solution using YOLO-based computer vision to monitor real-time vehicle flow, integrated with Raspberry Pi and relays to dynamically control traffic lights.",
    technologies: ["YOLOv5", "Raspberry Pi", "MQTT", "Computer Vision", "IoT"],
    achievements: [
      "92% accuracy in vehicle detection across 8 vehicle types",
      "30% reduction in average vehicle queue length",
      "22% improvement in traffic flow during peak hours"
    ],
    category: "AI/ML",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Cloth Segregation System using Spectral Analysis",
    description: "Computer vision and spectral sensor-based waste management system to segregate cloth materials based on type, optimizing textile recycling operations.",
    technologies: ["AS7265x Spectral Sensor", "Computer Vision", "Automation", "Microcontrollers"],
    achievements: [
      "85%+ precision in cloth-type classification",
      "40% improvement in sorting speed",
      "70% reduction in human intervention"
    ],
    category: "Automation",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "4-Wheel Autonomous Rover",
    description: "Fully autonomous rover using RPLiDAR for obstacle detection and path planning, integrated with ROS Noetic and Raspberry Pi for real-time navigation.",
    technologies: ["RPLiDAR", "ROS Noetic", "Python", "Raspberry Pi", "Path Planning"],
    achievements: [
      "90% obstacle avoidance accuracy",
      "Real-time LiDAR scanning and processing",
      "Successful autonomous navigation in complex environments"
    ],
    category: "Robotics",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Emotion-Based Digital Twin System",
    description: "Research prototype for modeling human digital twin by mapping emotions to brain electrical pulses and predicting behavior using machine learning.",
    technologies: ["EEG Analysis", "LSTM", "Machine Learning", "Neural Networks"],
    achievements: [
      "Novel framework for emotion-behavior mapping",
      "Multi-modal input capture system",
      "Applications in mental health monitoring"
    ],
    category: "Research",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Elephant Detection & Collision Prevention",
    description: "Safety system for railways in forest areas that detects elephants using computer vision and GPS collars, triggering automated alerts and deterrent mechanisms.",
    technologies: ["YOLO", "GPS Tracking", "Computer Vision", "Safety Systems"],
    achievements: [
      "90%+ accuracy in elephant detection",
      "Real-time movement tracking dashboard",
      "Automated deterrent system for wildlife safety"
    ],
    category: "Conservation",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "SolarAI – Solar Panel Optimization",
    description: "AI-powered solar panel monitoring and cleaning trigger system that optimizes energy output using real-time temperature, dust, and performance data.",
    technologies: ["IoT Sensors", "Cloud Computing", "Anomaly Detection", "Energy Optimization"],
    achievements: [
      "5-30% improvement in energy yield",
      "Automated cleaning trigger system",
      "Reduced maintenance costs and water usage"
    ],
    category: "Energy",
    image: "/api/placeholder/400/250"
  }
];

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="fixed inset-0 z-0">
        <Scene3D className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold gradient-text"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                HARISH
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-xl md:text-2xl text-cyber-blue font-light tracking-wide">
                  AI/ML ENGINEER & EMBEDDED SYSTEMS INNOVATOR
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  3rd Year BE CSE AIML • D.E. Mahalingam College of Engineering and Technology
                </p>
                <p className="text-foreground/80 max-w-3xl mx-auto text-lg leading-relaxed">
                  Passionate about building intelligent solutions that bridge the digital and physical worlds. 
                  Specializing in computer vision, IoT integration, and real-time automation systems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 pt-6"
              >
                <div className="glass-card px-4 py-2 rounded-full border-primary/30">
                  <span className="text-sm text-primary">Computer Vision</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full border-cyber-blue/30">
                  <span className="text-sm text-cyber-blue">IoT Integration</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full border-cyber-pink/30">
                  <span className="text-sm text-cyber-pink">Edge Computing</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full border-neural-orange/30">
                  <span className="text-sm text-neural-orange">Real-time Systems</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <QuoteSection />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Innovative solutions spanning AI/ML, robotics, and embedded systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* AI Chat */}
      <AIChat />
    </div>
  );
};