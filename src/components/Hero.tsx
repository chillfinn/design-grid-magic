
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 section relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm md:text-base text-accent font-mono tracking-wide opacity-0 animate-fade-in delay-1">
                Hello, I'm a
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gradient opacity-0 animate-fade-in delay-2">
                Design Engineer
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-2xl opacity-0 animate-fade-in delay-3">
                I craft intuitive interfaces and build functional systems with a focus on both aesthetics and performance.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 opacity-0 animate-fade-in delay-4">
              <Button className="bg-accent hover:bg-accent/80 text-white">
                View Projects
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                About Me
              </Button>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end opacity-0 animate-fade-in delay-5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/10 backdrop-blur-3xl absolute -top-6 -right-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass border border-white/10 relative z-10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
                <p className="text-sm font-mono text-center text-white/70 px-6">
                  <span className="text-accent">function</span> createDesign() &#123;<br />
                  &nbsp;&nbsp;const aesthetics = <span className="text-accent">"minimal"</span>;<br />
                  &nbsp;&nbsp;const functionality = <span className="text-accent">"optimal"</span>;<br />
                  &nbsp;&nbsp;<span className="text-accent">return</span> perfect_balance;<br />
                  &#125;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block opacity-0 animate-fade-in delay-5">
        <a href="#about" className="flex flex-col items-center justify-center space-y-2 text-white/60 hover:text-white transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
