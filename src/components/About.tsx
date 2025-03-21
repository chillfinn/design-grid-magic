
import { Code, Layers, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section relative bg-black/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-wide mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg">
            I'm a design engineer with over 5 years of experience creating digital products 
            that blend aesthetics with functionality. My approach combines technical expertise 
            with a deep understanding of user experience design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-xl border border-white/10 flex flex-col items-start transition-all hover:translate-y-[-5px] hover:border-accent/30 group"
            >
              <div className="p-3 mb-6 rounded-lg bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const aboutCards = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Development",
    description: "I write clean, efficient code with modern frameworks to build robust applications that perform flawlessly."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Design Systems",
    description: "I create cohesive design systems that ensure consistency and efficiency across products while enabling scalability."
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Problem Solving",
    description: "I approach each project as a problem to solve, balancing technical constraints with user needs and business goals."
  }
];

export default About;
