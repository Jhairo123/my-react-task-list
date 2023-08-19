/* eslint-disable react/prop-types */
import Task from "./Task";
import { useEffect, useState } from "react";

export default function TaskList({ msgBtn1, msgBtn2, list }) {
  const [inputValue, setInputValue] = useState([]);
  const [textareaValue, setTextareaValue] = useState([]);

  useEffect(() => {
    const savedValue = localStorage.getItem("inputValue");
    const savedTextareaValue = localStorage.getItem("textareaValue");
    if (savedValue) {
      setInputValue(savedValue);
    }
    if (savedTextareaValue) {
      setTextareaValue(savedTextareaValue);
    }
  }, []);

  // Guardar el valor en localStorage cuando el input cambie
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    localStorage.setItem("inputValue", newValue);
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setTextareaValue(value);
    // Guardar en localStorage cuando el textarea cambie
    localStorage.setItem("textareaValue", value);
  };

  return (
    <>
      {/* Header */}
      <div className="contenedorTaskList1">
        <input
          className="grid-item-a"
          type="text"
          value={inputValue}
          id="nuevaTarea"
          placeholder="Agregar nueva tarea"
          onChange={handleInputChange}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Añade una descripción..."
          value={textareaValue}
          onChange={handleTextareaChange}
        ></textarea>
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
