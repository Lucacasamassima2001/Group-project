import { useState } from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import "./index.css";
import Form from "./Components/Form";
import ProjectSelected from "./Components/ProjectSelected";
function App() {
  const [manageProject, setManageProject] = useState({
    isAdding: undefined,
    projects: [
      {
        title: "Project",
        description: "my project",
        date: "24/06/3023",
        id: "43213",
      },
      {
        title: "Second Project",
        description: "My second React Project",
        date: "11/10/1056",
        id: "62314",
      },
      {
        title: "Third Project",
        description: "My Third React Project",
        date: "06/08/2012",
        id: "12312",
      },
    ],
    selectedProject: undefined,
  });

  function showForm() {
    setManageProject((prev) => {
      return { ...prev, isAdding: null };
    });
  }

  function handleCreate(addedProject) {
    setManageProject((prev) => {
      const projectId = Math.random();
      const newProject = { ...addedProject, id: projectId };

      return {
        ...prev,
        isAdding: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function deleteProject() {
    setManageProject((prev) => {
      return {
        ...prev,
        projects: prev.projects.filter(
          (project) => project.id !== prev.isAdding
        ),
        isAdding: undefined,
      };
    });
  }

  const showProject = (e) => {
    let showedProject = manageProject.projects.find(
      (project) => project.id === e
    );

    setManageProject((prev) => {
      return {
        ...prev,
        isAdding: showedProject.id,
        selectedProject: showedProject,
      };
    });
  };

  let showed = (
    <ProjectSelected
      onDelete={deleteProject}
      project={manageProject.selectedProject}
    />
  );
  if (manageProject.isAdding === null) {
    showed = <Form onSave={handleCreate} />;
  } else if (manageProject.isAdding === undefined) {
    showed = <Content onAdd={showForm} />;
  }
  return (
    <>
      <main>
        <Sidebar
          onShow={showProject}
          projects={manageProject.projects}
          onAdd={showForm}
        />
        <section>{showed}</section>
      </main>
    </>
  );
}

export default App;
