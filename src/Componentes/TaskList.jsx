import Task from "./Task";

export default function TaskList({ msg1, msg2 }) {
  const lista = ["tarea 1", "tarea 2", "tarea 3", "tarea 4", "tarea 5"];
  return (
    <>
      <div className="contenedorTaskList1">
        <input
          className="grid-item-a"
          type="text"
          id="nuevaTarea"
          placeholder="Agregar nueva tarea"
        />
        <button className="grid-item-b" id="agregarTarea">
          {msg1}
        </button>
        {/* <br></br> */}

        {lista.map((tarea, index) => (
          <Task key={index} mensaje={tarea} />
        ))}
      </div>
      <div>
        <p>Tienes {lista.length} tarea(s) pendientes</p>
        <button id="agregarTarea">{msg2}</button>
      </div>
    </>
  );
}
