import { useState } from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import "./index.css";
import Form from "./Components/Form";
import ProjectSelected from "./Components/ProjectSelected";
function App() {
  const [manageProject, setManageProject] = useState({
    isAdding: undefined,
    projects: [],
  });

  // show functions

  function showForm() {
    setManageProject((prev) => {
      return { ...prev, isAdding: null };
    });
  }

  function showProject(id) {
    setManageProject((prev) => {
      return {
        ...prev,
        isAdding: id,
      };
    });
  }

  // form functions

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

  function handleCancel() {
    setManageProject((prev) => {
      return { ...prev, isAdding: undefined };
    });
  }

  // tasks functions

  function handleCreateTask(addedTask) {
    setManageProject((prev) => {
      const updatedProjects = prev.projects.map((project) => {
        if (project.id === prev.isAdding) {
          const taskId = Math.random();
          const newTask = { addedTask, id: taskId };
          return { ...project, tasks: [newTask, ...project.tasks] };
        } else {
          return project;
        }
      });
      return { ...prev, projects: updatedProjects };
    });
  }

  function handleDeleteTask(taskId) {
    setManageProject((prev) => {
      const updatedProjects = prev.projects.map((project) => {
        if (project.id === prev.isAdding) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        } else {
          return project;
        }
      });
      return { ...prev, projects: updatedProjects };
    });
  }

  // delete project function

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

  const showedProject = manageProject.projects.find(
    (project) => project.id === manageProject.isAdding
  );

  let showed = (
    <ProjectSelected
      onDelete={deleteProject}
      project={showedProject}
      onAddTask={handleCreateTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (manageProject.isAdding === null) {
    showed = <Form onCancel={handleCancel} onSave={handleCreate} />;
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
