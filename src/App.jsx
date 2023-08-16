import "./App.css";
import Header from "./Componentes/Header";
import TaskList from "./Componentes/TaskList";
function App() {
  // const list = ["tarea 1", "tarea 2"];
  return (
    <div>
      <Header titulo="lista de tareas" />
      <TaskList msg1="+" msg2="Eliminar todo" />
    </div>
  );
}

export default App;
