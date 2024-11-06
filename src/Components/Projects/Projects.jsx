import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/Screenshot (264).png";
import image2 from "../../assets/Screenshot (266).png";
import image3 from "../../assets/Screenshot (267).png";
const Projects = () => {
  return (
    <div id="Projects" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl my-20 mx-0 md:mx-20 bg-opacity-30 rounded-lg p-10">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
      <ProjectCard
        title="Resume Builder"
        main="This is a Resume Builder created with html, css, typescript"
        demoLink="https://demo-link-1.com"
        sourceCodeLink="https://github.com/username/project1"
        image={image1}
      />

      {/* Project 2 */}
      <ProjectCard
        title="Book List"
        main="This is a book list website created with html, css, javascript"
        demoLink="https://book-list-by-komal.netlify.app/"
        sourceCodeLink="https://github.com/Kommmal/Book-List"
        image={image2}
      />

      {/* Project 3 */}
      <ProjectCard
        title="Clock"
        main="This is a clock website created with html, css, javascript"
        demoLink="https://clock-by-komal.netlify.app/"
        sourceCodeLink="https://github.com/Kommmal/Clock"
        image={image3}
      />
    </div>
    </div>
  );
};
export default Projects;