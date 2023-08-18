/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({ msgBtn1, msgBtn2, list }) {
  return (
    <>
      {/* Header */}
      <div className="contenedorTaskList1">
        <input
          className="grid-item-a"
          type="text"
          id="nuevaTarea"
          placeholder="Agregar nueva tarea"
        />
        <button className="grid-item-b" id="agregarTarea">
          {msgBtn1}
        </button>
        <div className="contenedorTaskList2">
          {list.map((arrayTarea) => (
            <Task key={arrayTarea.id} mensaje={arrayTarea.nombre} />
          ))}
        </div>
      </div>
      <div>
        <p>Tienes {list.length} tarea(s) pendientes</p>
        <button
          style={{
            display: "inline-grid",
            gridTemplateColumns: "18rem",
            backgroundColor: "red",
            color: "white",
          }}
          id="agregarTar"
        >
          {msgBtn2}
        </button>
      </div>
    </>
  );
}
