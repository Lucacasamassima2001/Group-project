import Button from "./Components/Button";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import "./index.css";
function App() {
  return (
    <>
      <main>
        <Sidebar />
        <Content />
        <Button text="Create new project" style="buttonSecondary" />
        <Button text="Create new project" style="buttonPrimary" />
      </main>
    </>
  );
}

export default App;
