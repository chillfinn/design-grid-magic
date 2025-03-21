
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <a href="#home" className="font-mono text-xl font-medium tracking-tight hover:text-accent transition-colors">
              design<span className="text-accent">.</span>engineer
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Creating thoughtful digital experiences that balance form and function with attention to detail.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-muted-foreground hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>San Francisco, CA</p>
              <p>hello@designengineer.dev</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
          
          <div className="md:col-span-3 md:text-right">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4 md:justify-end">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-muted-foreground text-sm mt-8">
              © {currentYear} Design Engineer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
