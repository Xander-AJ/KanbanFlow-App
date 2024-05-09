import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  duration: string;
  languages: string;
  repo: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [addingProject, setAddingProject] = useState(false);
  const [newProject, setNewProject] = useState<Project>({
    title: "",
    description: "",
    duration: "",
    languages: "",
    repo: ""
  });

  const handleAddProject = () => {
    setAddingProject(true);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Project
  ) => {
    setNewProject({ ...newProject, [field]: event.target.value });
  };

  const handleSubmitProject = () => {
    setProjects([...projects, newProject]);
    setAddingProject(false);
    setNewProject({
      title: "",
      description: "",
      duration: "",
      languages: "",
      repo: ""
    });
  };

  const handleRemoveProject = (index: number) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h1>Projects Page</h1>
      {addingProject ? (
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={newProject.title}
            onChange={(e) => handleInputChange(e, "title")}
          />
          <label>Description:</label>
          <textarea
            value={newProject.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
          <label>Duration:</label>
          <input
            type="text"
            value={newProject.duration}
            onChange={(e) => handleInputChange(e, "duration")}
          />
          <label>Languages:</label>
          <input
            type="text"
            value={newProject.languages}
            onChange={(e) => handleInputChange(e, "languages")}
          />
          <label>Repo URL:</label>
          <input
            type="text"
            value={newProject.repo}
            onChange={(e) => handleInputChange(e, "repo")}
          />
          <button onClick={handleSubmitProject}>Add Project</button>
        </div>
      ) : (
        <button onClick={handleAddProject}>Add Project</button>
      )}
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Duration: {project.duration}</p>
          <p>Languages: {project.languages}</p>
          <p>Repo: {project.repo}</p>
          <button onClick={() => handleRemoveProject(index)}>Remove</button>
          <p>Order: {index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
