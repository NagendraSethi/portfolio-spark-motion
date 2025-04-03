
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <SectionHeading>Projects</SectionHeading>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            githubLink="https://github.com/sample/brickfinder"
            liveLink="https://brickfinder-demo.com"
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
            githubLink="https://github.com/sample/lms-project"
            imageUrl="/placeholder.svg"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
