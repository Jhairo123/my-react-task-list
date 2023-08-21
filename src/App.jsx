import "./App.css";
import Header from "./Componentes/Header";
import TaskList from "./Componentes/TaskList";

function App() {
  // Lista es un array de objetos

  return (
    <div>
      <Header titulo="lista de tareas" />
      <TaskList msgBtn1="+" msgBtn2="Eliminar todo" />
    </div>
  );
}

export default App;
