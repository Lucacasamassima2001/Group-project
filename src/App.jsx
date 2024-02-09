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
        tasks: [
          {
            id: "1",
            name: "Task 1",
          },
          {
            id: "2",
            name: "Task 2",
          },
        ],
      },
      {
        title: "Second Project",
        description: "My second React Project",
        date: "11/10/1056",
        id: "62314",
        tasks: [
          {
            id: "1",
            name: "Task 1",
          },
          {
            id: "2",
            name: "Task 2",
          },
          {
            id: "3",
            name: "Task 3",
          },
        ],
      },
      {
        title: "Third Project",
        description: "My Third React Project",
        date: "06/08/2012",
        id: "12312",
        tasks: [
          {
            id: "1",
            name: "Task 1",
          },
        ],
      },
    ],
    selectedProject: undefined,
  });
  let showed;

  function showForm() {
    setManageProject({ ...manageProject, isAdding: true });
  }

  function deleteProject(deletingProject) {
    const arr = manageProject.projects.filter(
      (project) => project !== deletingProject
    );

    setManageProject({
      ...manageProject,
      projects: arr,
      selectedProject: {},
      isAdding: undefined,
    });
  }

  const showProject = (e) => {
    let showedProject = manageProject.projects.filter(
      (project) => project.id === e
    );
    console.log(showedProject[0].id);

    setManageProject({
      ...manageProject,
      isAdding: false,
      selectedProject: showedProject,
    });
  };

  if (manageProject.isAdding === true) {
    showed = <Form />;
  } else if (manageProject.isAdding === false) {
    showed = (
      <ProjectSelected
        onDelete={() => deleteProject(manageProject.selectedProject[0])}
        project={manageProject.selectedProject[0]}
      />
    );
  } else {
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
