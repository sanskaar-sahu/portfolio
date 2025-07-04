import React, { useState } from 'react';
import { cn } from '../lib/utils';

const skills = [
  // Frontend
  { name: "HTML5/CSS3", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "ShadCN UI", level: 70, category: "frontend" },

  // Backend
  { name: "Next.js (App Router)", level: 75, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Mongoose", level: 70, category: "backend" },
  { name: "JWT Auth", level: 80, category: "backend" },

  // Tools & Platforms
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },

  // Soft Skills
  { name: "Problem Solving", level: 90, category: "soft-skills" },
  { name: "Team Collaboration", level: 85, category: "soft-skills" },
  { name: "Communication", level: 80, category: "soft-skills" },
  { name: "Adaptability", level: 85, category: "soft-skills" },
  { name: "Time Management", level: 80, category: "soft-skills" },
  { name: "Continuous Learning", level: 90, category: "soft-skills" },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "frontend", "backend", "tools", "soft-skills"];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[glow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1 text-sm text-muted-foreground">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
