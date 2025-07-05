import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [project.image.length]);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
      {/* Sliding Image Container */}
      <div className="relative w-full h-48 overflow-hidden">
        <div
          className="flex transition-transform duration-700 animate-slide-in h-full"
          style={{
            width: `${project.image.length * 100}%`,
            transform: `translateX(-${currentImageIndex * (100 / project.image.length)}%)`,
          }}
        >
          {project.image.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={project.title}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ width: `${100 / project.image.length}%` }}
            />
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.giturl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
