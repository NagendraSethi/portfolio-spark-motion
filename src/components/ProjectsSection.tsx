
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <AnimatedElement>
          <SectionHeading>Projects</SectionHeading>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Professional Training and Development Center"
            description={
              <ul className="list-disc pl-5 space-y-2">

                <li>
                  Contributed to the design, development, and enhancement of client-facing platforms using modern web technologies.
                </li>
                <li>
                  Worked closely with designers, developers, and stakeholders to deliver customized solutions for external clients.
                </li>
                <li>
                  Participated in code reviews, debugging, and optimizations to improve application efficiency and user experience.
                </li>
              </ul>
            }
            technologies={["HTML", "CSS", "SCSS", "JavaScript"]}
            githubLink="https://github.com/PramodKumarGH/PTDC"
            liveLink="https://ptdc.in/index.html"
            imageUrl="public/PTDC.png"
            delay={200}
          />
          <ProjectCard
            title="BrickFinder App"
            description={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Developed BrickFinder, a real estate platform with dynamic property listing, advanced search filters, and map integration.
                </li>
                <li>
                  Designed RESTful APIs for seamless frontend-backend communication and integrated a real-time chat system.
                </li>
                <li>
                  Styled with SCSS for a modular, responsive design across all devices.
                </li>
              </ul>
            }
            technologies={["React.js", "Node.js", "Express.js", "MongoDB", "SCSS"]}
            githubLink="https://github.com/NagendraSethi/Brick-Finder-Web-App"
            // liveLink="https://brickfinder-demo.com"
            imageUrl="/placeholder.svg"
            delay={100}
          />

          <ProjectCard
            title="Learning Management System"
            description={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Implemented role-based authentication for secure access in the backend using Express.js.
                </li>
                <li>
                  Developed a user-friendly dashboard for course management using the MERN stack.
                </li>
                <li>
                  Integrated functionalities for login, course browsing, and payment processing.
                </li>
              </ul>
            }
            technologies={["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"]}
            githubLink="https://github.com/NagendraSethi/Learning-Management-System"
            imageUrl="/placeholder.svg"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
