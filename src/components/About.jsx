import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <section id="about" className='py-24 px-4 relative'>
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>About <span className='text-primary'>Me</span></h2>



                {/*Left section*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Enthusiast</h3>
                        <p className='text-muted-foreground'>
                            I'm Sanskar Sahu, a final-year B.Tech student and React Developer with hands-on experience
                            in building full-stack web applications using React.js, Next.js, Node.js, and MongoDB.
                            I've worked on several real-world projects focused on clean design, performance, and functionality.
                        </p>
                        <p className='text-muted-foreground'>
                            I'm deeply passionate about transforming ideas into functional, user-focused digital products.
                            I love exploring new frameworks, refining interfaces, and building seamless experiences that blend
                            creativity with logic. My goal is to keep learning, growing, and contributing to impactful web solutions.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                        </div>
                    </div>

                    {/*right section  */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p className='text-muted-foreground'>
                                        <p className='text-muted-foreground'>
                                            Building responsive, scalable, and interactive web applications using modern JavaScript frameworks.
                                        </p>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className='h-6 w-6 text-primary' />
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                    <p className='text-muted-foreground'>
                                        Designing intuitive user interfaces and improving user experience with clean and accessible layouts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Project Management</h4>
                                    <p className='text-muted-foreground'>
                                        Leading projects from conceptions to completion with agile methodologies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Section */}
            </div>

            { }

        </section>
    )
}

export default About
