
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <SectionHeading>Experience</SectionHeading>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <ExperienceCard
            title="Full Stack Developer Intern"
            company="Kraft Heins India GCC Pvt. Ltd., Ahmedabad"
            duration="Jul 2024 - Present"
            link="https://www.kraftheinzcompany.com/"
            technologies={["React.js", "Redux-Toolkit", "FastAPI", "PostgreSQL", "Bootstrap CSS", "Azure Cloud", "Azure CosmosDB", "Power BI"]}
            delay={200}
            description={
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Worked on Enterprise NPS System for employee, team and Business performance assessments, replacing manual Excel-based surveys with a web application, increasing submission rates by 34%.
                </li>
                <li>
                  Implemented and optimized an email management system, improving communication efficiency by 60% through structured email templates for initial and reminder notifications.
                </li>
                <li>
                  Built a RESTful API for email template management, supporting CRUD operations, tagging functionality, and soft delete.
                </li>
                <li>
                  Implemented a Placeholder Resolver for real-time replacement of placeholders, enhancing email template customization.
                </li>
                <li>
                  Redesigned the Survey Form UI with user actions (Submit, Skip, Decline), improving navigation and completion rates.
                </li>
                <li>
                  Implemented a data synchronization system enabling autosave functionality without database overhead, reducing form loss by 40%.
                </li>
                <li>
                  Collaborated with the Data Analytics Team to visualize NPS data using Power BI, providing actionable insights for stakeholders.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
