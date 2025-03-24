import ProjectCart from "@/components/ProjectCart";


const LawyerImagePath = new URL("@/assets/images/LawyerProject1.png", import.meta.url).href;
const SCGCInternImagePath = new URL("@/assets/images/SCGC-Intern.png", import.meta.url).href;

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Project A",
      description: "This is the first project description with more details about what was accomplished.",
      image: LawyerImagePath,
      details: [
        "Developed a full-stack application",
        "Implemented user authentication",
        "Created responsive UI components"
      ],
      technologies: "React, Node.js, MongoDB",
      duration: "3 months"
    },
    {
      title: "Nitrogen Consumption",
      description: "Internship project for SCGC to create web-application to record nitrogen in Map Ta Phut tank terminal and send data to customer.",
      image: SCGCInternImagePath,
      details: [
        "Built data visualization dashboard",
        "Integrated with SCADA systems",
        "Developed automated reporting"
      ],
      technologies: "React, Python, PostgreSQL",
      duration: "4 months"
    },
    {
      title: "Project C",
      description: "This is the third project description showing another example of work.",
      image: "https://source.unsplash.com/400x300/?city",
      technologies: "Vue.js, Firebase",
      duration: "2 months"
    }
  ];

  return (
    <div className="container z-10">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-10 tracking-wide">
        My Projects
      </h1>
      <div className="join join-vertical w-full mt-10">
        {projects.map((project, index) => (
          <ProjectCart 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            details={project.details}
            technologies={project.technologies}
            duration={project.duration}
          />
        ))}
      </div>
    </div>
  );
};
