import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, GraduationCap, Code2, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "harish.aiml@example.com",
    href: "mailto:harish.aiml@example.com",
    color: "text-cyber-blue"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/harish-aiml",
    href: "https://github.com/harish-aiml",
    color: "text-foreground"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/harish-aiml",
    href: "https://linkedin.com/in/harish-aiml",
    color: "text-cyber-blue"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
    color: "text-cyber-pink"
  }
];

const socialProfiles = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/harish-username",
    color: "text-foreground hover:text-primary"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/harish-username",
    color: "text-cyber-blue hover:text-cyber-blue/80"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/harish_username",
    color: "text-cyber-pink hover:text-cyber-pink/80"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/harish_username",
    color: "text-cyber-blue hover:text-cyber-blue/80"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@harish_channel",
    color: "text-neural-orange hover:text-neural-orange/80"
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Interested in collaborating on AI/ML projects or discussing innovative solutions? 
            Let's build the future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-primary/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group"
                    >
                      <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{item.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Status */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-primary/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education & Status
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground">Current Education</h4>
                    <p className="text-muted-foreground mt-1">
                      3rd Year BE Computer Science Engineering (AI/ML)
                    </p>
                    <p className="text-sm text-primary">
                      D.E. Mahalingam College of Engineering and Technology
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Specialization</h4>
                    <p className="text-muted-foreground mt-1">
                      Artificial Intelligence & Machine Learning with focus on:
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Computer Vision & Image Processing</li>
                      <li>• Embedded Systems & IoT Integration</li>
                      <li>• Real-time Automation Systems</li>
                      <li>• Edge Computing & Model Deployment</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">Current Status</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                      <span className="text-sm text-cyber-green">Open to Internships & Collaborations</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Ready to Innovate Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking for an intern, collaborator, or someone passionate about 
                solving real-world problems with AI, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl neural-animation"
                  onClick={() => window.open('mailto:harish.aiml@example.com', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open('https://linkedin.com/in/harish-aiml', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Media Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Connect on Social Media
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Follow my journey in AI/ML engineering, get updates on latest projects, 
                and connect with me across various platforms.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                {socialProfiles.map((profile, index) => (
                  <motion.a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group ${profile.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <profile.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{profile.name}</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Please update the social media URLs above with your actual profile links. 
                  The current links are placeholder examples.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};