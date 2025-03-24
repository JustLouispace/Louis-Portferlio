import ProjectCart from "@/components/ProjectCart";

export const ProjectsSection = () => {

  const projects = [
    {
      title: "Project A",
      description: "This is the first project description.",
      image: "https://source.unsplash.com/400x300/?technology",
    },
    {
      title: "Project B",
      description: "This is the second project description.",
      image: "https://source.unsplash.com/400x300/?nature",
    },
    {
      title: "Project C",
      description: "This is the third project description.",
      image: "https://source.unsplash.com/400x300/?city",
    },
    {
      title: "Project D",
      description: "This is the fourth project description.",
      image: "https://source.unsplash.com/400x300/?business",
    },
  ];


  return (
    <div className="container z-10">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-10 tracking-wide  ">
        My Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 ">
        {projects.map((project, index) => (
          <ProjectCart 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};
