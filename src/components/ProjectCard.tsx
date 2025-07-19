import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  category: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 h-full flex flex-col neural-animation group">
        <CardHeader className="space-y-4">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20" />
            <div className="text-4xl opacity-60 group-hover:opacity-80 transition-opacity">
              {project.category === 'AI/ML' && '🤖'}
              {project.category === 'Automation' && '⚙️'}
              {project.category === 'Robotics' && '🤖'}
              {project.category === 'Research' && '🧠'}
              {project.category === 'Conservation' && '🐘'}
              {project.category === 'Energy' && '☀️'}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {project.category}
              </Badge>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
            <ul className="space-y-1">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-cyber-green mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs border-primary/30 text-primary/80 hover:bg-primary/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};