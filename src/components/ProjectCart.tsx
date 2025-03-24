"use client";

interface ProjectCartProps {
  title: string;
  description: string;
  image: string;
  details?: string[];
  technologies?: string;
  duration?: string;
}

const ProjectCart: React.FC<ProjectCartProps> = ({ 
  title, 
  description, 
  image,
  details = [],
  technologies = "React, Tailwind, etc.",
  duration = "6 months"
}) => {
  return (
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-projects-accordion" />
      <div className="collapse-title font-semibold flex items-center gap-4">
        <img 
          src={image} 
          alt={title} 
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
        </div>
      </div>
      <div className="collapse-content"> 
        <div className="pt-4">
          <p className="mb-4">{description}</p>
          
          {details.length > 0 && (
            <div className="mb-4">
              {details.map((detail, index) => (
                <p key={index} className="text-gray-600">🔹 {detail}</p>
              ))}
            </div>
          )}
          
          <div className="text-sm text-gray-500 space-y-1">
            <p>🛠️ <span className="font-medium">Technologies:</span> {technologies}</p>
            <p>⏱️ <span className="font-medium">Duration:</span> {duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
