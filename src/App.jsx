import "./App.css";
import Header from "./Componentes/Header";
import TaskList from "./Componentes/TaskList";
function App() {
  // Lista es un array de objetos
  const lista = [
    { id: 1, nombre: "tarea " },
    { id: 2, nombre: "tarea " },
    { id: 3, nombre: "tarea " },
    { id: 4, nombre: "tarea " },
    { id: 5, nombre: "tarea " },
    { id: 6, nombre: "tarea " },
  ];
  return (
    <div>
      <Header style={{ border: "1" }} titulo="lista de tareas" />
      <TaskList msgBtn1="+" msgBtn2="Eliminar todo" list={lista} />
    </div>
  );
}

export default App;
