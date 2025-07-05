import { React, useState, useEffect } from 'react'
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ProjectCard from './ProjectCard'
const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A appointment management tool built using Next.js and Typescript",
        image: ["/projects/health-plus/login.png", "/projects/health-plus/dashboard.png"],
        tags: ["Next.js", "Typescript", "twilio", "appwrite"],
        giturl: "https://github.com/sanskaar-sahu"
    },
    {
        id: 2,
        title: "SaaS Landing Page",
        description: "TravelTale : A blog app where you can keep the memories",
        image: ["/projects/travelstory/login.png", "/projects/travelstory/website.png", "/projects/travelstory/website2.png"],
        tags: ["React", "Node.js", "Tailwindcss", "DayPicker"],
        giturl: "https://github.com/sanskaar-sahu"
    },
    {
        id: 3,
        title: "Movie Recommendation System",
        description: "Movie Recommendation system to get the movies you might want",
        image: ["/projects/movie/image.png", "/projects/movie/website.png"],
        tags: ["Python", "Streamlit", "NLP", "Machine Learning", "Cosine Similarity", "TMDb API"],
        giturl: "https://github.com/sanskaar-sahu/sanskar-movie-recommender.git"
    }
]


const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/sanskaar-sahu"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
