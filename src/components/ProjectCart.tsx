import React from "react";

const ProjectCart = ({ title, description, image }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt={title} className="w-full h-40 object-cover"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
