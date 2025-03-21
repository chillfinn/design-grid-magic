
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const ProjectCard = ({ title, description, tags, image, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative rounded-lg overflow-hidden border border-white/10 h-[400px] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700",
          isHovered ? "scale-105" : "scale-100"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className={cn(
          "transform transition-transform duration-300",
          isHovered ? "translate-y-0" : "translate-y-8"
        )}>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{title}</h3>
          
          <p className={cn(
            "text-muted-foreground text-sm mb-4 opacity-0 transform transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "translate-y-4"
          )}>
            {description}
          </p>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center text-sm font-medium text-accent opacity-0 transform transition-all duration-300",
                isHovered ? "opacity-100 translate-y-0" : "translate-y-4"
              )}
            >
              View Project <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
