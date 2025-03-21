
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-wide mb-3">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent design and development work. Each project represents 
            a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Minimalist Dashboard UI",
    description: "A modern admin dashboard with dark mode, responsive design, and interactive data visualizations.",
    tags: ["UI Design", "React", "Data Viz"],
    image: "https://images.unsplash.com/photo-1595664652035-0dadf1c03ecf?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "E-commerce Design System",
    description: "A comprehensive design system for a large-scale e-commerce platform focusing on accessibility and user experience.",
    tags: ["Design System", "Figma", "Accessibility"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "IoT Control Application",
    description: "Mobile application for managing smart home devices with intuitive controls and automation tools.",
    tags: ["Mobile App", "IoT", "React Native"],
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Financial Analytics Platform",
    description: "Data visualization platform for financial insights with interactive charts and customizable reports.",
    tags: ["Data", "TypeScript", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Portfolio Website Template",
    description: "Customizable portfolio template for designers and developers with minimal aesthetic.",
    tags: ["Web Design", "CSS Grid", "Animation"],
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Health Monitoring App",
    description: "User-friendly health tracking application with personalized insights and clean data visualization.",
    tags: ["UX Design", "Health Tech", "React"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export default Projects;
