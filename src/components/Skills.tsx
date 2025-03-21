
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  return (
    <section id="skills" className="section bg-black/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-wide mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Tools</h2>
          <p className="text-muted-foreground text-lg">
            My technical toolkit and design proficiencies that enable me to craft 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <h3 className="text-xl font-semibold mb-6">Design</h3>
            {designSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-1.5 bg-white/5" indicatorClassName="bg-accent" />
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <h3 className="text-xl font-semibold mb-6">Development</h3>
            {devSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-1.5 bg-white/5" indicatorClassName="bg-accent" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-10 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="glass p-4 rounded-lg border border-white/10 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                    <span className="text-lg">{tool.icon}</span>
                  </div>
                </div>
                <p className="text-sm font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const designSkills = [
  { name: "User Interface Design", level: 95 },
  { name: "User Experience", level: 90 },
  { name: "Design Systems", level: 85 },
  { name: "Typography", level: 92 },
  { name: "Motion Design", level: 78 },
];

const devSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript/TypeScript", level: 88 },
  { name: "React", level: 92 },
  { name: "Responsive Design", level: 96 },
  { name: "CSS Grid/Flexbox", level: 94 },
];

const tools = [
  { name: "Figma", icon: "🎨" },
  { name: "VS Code", icon: "📝" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "🌬️" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Git", icon: "🔄" },
  { name: "Photoshop", icon: "🖌️" },
  { name: "Illustrator", icon: "✒️" },
  { name: "After Effects", icon: "🎬" },
  { name: "Notion", icon: "📊" },
  { name: "Node.js", icon: "🟢" },
  { name: "GraphQL", icon: "◼️" },
];

export default Skills;
