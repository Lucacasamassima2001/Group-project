import { useState } from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import "./index.css";
import Form from "./Components/Form";
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
    ],
  });

  function showForm() {
    setManageProject({ ...manageProject, isAdding: true });
  }
  let showed;
  if (manageProject.isAdding === true) {
    showed = <Form />;
  } else {
    showed = <Content onAdd={showForm} />;
  }
  return (
    <>
      <main>
        <Sidebar projects={manageProject.projects} onAdd={showForm} />
        <section>{showed}</section>
      </main>
    </>
  );
}

export default App;
