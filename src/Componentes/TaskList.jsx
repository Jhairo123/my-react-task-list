/* eslint-disable react/prop-types */
import Task from "./Task";
import { useEffect, useState } from "react";

export default function TaskList({ msgBtn1, msgBtn2 }) {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [dataList, setDataList] = useState(
    JSON.parse(localStorage.getItem("dataList"))
  );

  const handleButtonDelete = () => {
    alert("las tareas han sido borradas satirfactoriamente");
    setDataList([]);
    // localStorage.clear();
  };

  const handleButtonAdd = () => {
    if (inputValue.trim() !== "" && textAreaValue.trim() !== "") {
      const newData = {
        titulo: inputValue,
        descripcion: textAreaValue,
        estado: false,
      };
      setDataList([...dataList, newData]);
      setInputValue("");
      setTextAreaValue("");
      alert("Se ha añadido la tarea a la lista satisfactoriamente");
    } else {
      alert("No se pudo guardar, todos los campos son obligatorios");
    }
  };

  useEffect(() => {
    const savedInputValue = localStorage.getItem("inputValue");
    const savedTextAreaValue = localStorage.getItem("textAreaValue");
    const savedDataList = JSON.parse(localStorage.getItem("dataList"));

    if (savedInputValue) {
      setInputValue(savedInputValue);
    }
    if (savedTextAreaValue) {
      setTextAreaValue(savedTextAreaValue);
    }
    if (savedDataList) {
      setDataList(savedDataList);
    }
  }, []); //Esto se muestra cuando se monta el componente (una sola vez)

  useEffect(() => {
    localStorage.setItem("inputValue", inputValue); // Guarda inputValue
    localStorage.setItem("textAreaValue", textAreaValue); // Guarda textareaValue
    localStorage.setItem("dataList", JSON.stringify(dataList)); // Guarda dataList
  }, [inputValue, textAreaValue, dataList]); // Guarda cuando cambian

  // Guardar el valor en localStorage cuando el input cambie
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // localStorage.setItem("inputValue", newInputValue);
  };

  const handleTextareaChange = (event) => {
    setTextAreaValue(event.target.value);
    // Guardar en localStorage cuando el textarea cambie
    // localStorage.setItem("textAreaValue", value);
  };

  return (
    <>
      {/*  */}
      <div className="contenedorTaskList1">
        <div
          style={{
            display: "inline-grid",
            gridColumn: "1 / span 2",
            // boxShadow: "0.5px 0.5px 4px rgb(85, 85, 85)",
            padding: "10px",
            gridColumnStart: "1",
            gridRowEnd: "2",
            gridTemplateColumns: "17rem",
            columnGap: "0.5rem",
            rowGap: "0.5rem",
          }}
        >
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
            value={textAreaValue}
            onChange={handleTextareaChange}
          ></textarea>
          <button
            className="grid-item-b"
            id="agregarTarea"
            onClick={handleButtonAdd}
          >
            {msgBtn1}
          </button>
        </div>
        <div className="contenedorTaskList2">
          {dataList.map((arrayTarea, id) => (
            <Task
              key={id}
              mensaje={arrayTarea.titulo}
              descripcion={arrayTarea.descripcion}
            />
          ))}
        </div>
        <div
          style={{
            display: "grid",

            padding: "10px",
            gridColumn: "1 / span 2",

            // width: "20rem",
            // boxShadow: "2px 2px 5px rgb(85, 85, 85)",
          }}
        >
          <p
            style={{
              marginTop: "0px" /* Margen superior de 20px */,
              marginBottom: "15px",
            }}
          >
            Tienes {dataList.length} tarea(s) pendientes
          </p>
          <button
            style={{
              display: "inline-grid",
              gridTemplateColumns: "18rem",
              backgroundColor: "red",
              color: "white",
            }}
            id="agregarTar"
            onClick={handleButtonDelete}
          >
            {msgBtn2}
          </button>
        </div>
      </div>
    </>
  );
}
