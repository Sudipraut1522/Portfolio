import {
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DiGithub } from "react-icons/di";
import Dashboard from "../../../../public/Images/dashboard.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      image: Dashboard,
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      category: "Full Stack",
      demoUrl: "https://demo-ecommerce.vercel.app",
      githubUrl: "https://github.com/username/ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: Dashboard,
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      category: "Web App",
      demoUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/username/taskmanager",
      featured: true,
    },

    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization and automated reporting.",
      image: Dashboard,
      technologies: ["Vue.js", "D3.js", "Express", "MySQL"],
      category: "Dashboard",
      demoUrl: "https://pacs.ayata.com.np/",
      githubUrl: "https://github.com/username/social-dashboard",
      featured: false,
    },

    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with smooth animations, dark mode, and contact integration.",
      image: Dashboard,
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
      category: "Portfolio",
      demoUrl: "https://portfolio-demo.vercel.app",
      githubUrl: "https://github.com/username/portfolio",
      featured: false,
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return <Database className="w-4 h-4" />;
      case "Frontend":
        return <Code className="w-4 h-4" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Palette className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack":
        return "from-blue-500 to-purple-600";
      case "Frontend":
        return "from-green-500 to-teal-600";
      case "Mobile":
        return "from-orange-500 to-red-600";
      case "Dashboard":
        return "from-purple-500 to-pink-600";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  return (
    <section
      id="projects"
      className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-purple-600 text-sm font-semibold tracking-widest mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What I Have Built
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development, mobile apps, and UI/UX design.
          </p>
        </div>

        {/* Featured Projects */}

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></span>
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                getCategoryIcon={getCategoryIcon}
                getCategoryColor={getCategoryColor}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            I am always open to discussing new opportunities and exciting
            projects.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get In Touch
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  getCategoryIcon,
  getCategoryColor,
  featured = false,
}) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(
            project.category
          )} text-white text-sm font-medium flex items-center gap-1`}
        >
          {getCategoryIcon(project.category)}
          {project.category}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 hover:bg-white rounded-full text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 hover:bg-white rounded-full text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            <DiGithub className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Live Demo
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-purple-500 hover:text-purple-600 transition-all duration-200"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
