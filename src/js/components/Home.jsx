import React, { useState } from "react";

const Home = () => {
    const [tareas, setTareas] = useState([]); 
    const [nuevaTarea, setNuevaTarea] = useState(''); 

    
    const manejarEnter = (e) => {
        if (e.key === 'Enter' && nuevaTarea.trim()) {
            setTareas([...tareas, { id: Date.now(), texto: nuevaTarea }]); 
            setNuevaTarea(''); 
        }
    };

    
    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id)); 
    };

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Goals for Today</h1>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                onKeyDown={manejarEnter}
                placeholder="Write your goal..."
            />
            
            <div className="lista-tareas">
                {tareas.length === 0 ? (
                    <p className="mensaje-vacio">Small steps, big impact.</p>
                ) : (
                    tareas.map((tarea) => (
                        <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
                    ))
                )}
            </div>
        </div>
    );
};


function Tarea({ tarea, eliminarTarea }) {
    return (
        <div className="tarea-contenedor">
            <span>{tarea.texto}</span>
            <button 
                className="boton-eliminar"
                onClick={() => eliminarTarea(tarea.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default Home;