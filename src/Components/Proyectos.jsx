import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {


    const [proyecto, setProyecto] = useState({});
    const params = useParams();


    useEffect(() => {
        // Usar find en lugar de filter para encontrar el proyecto por ID
        const proyectoEncontrado = trabajos.find(trabajo => trabajo.id === params.id);

        if (proyectoEncontrado) {
            setProyecto(proyectoEncontrado);
        } else {
            // Si no se encuentra el proyecto, puedes manejar esto como desees
            console.log(`Proyecto con ID ${params.id} no encontrado.`);
        }
    }, [params.id]);


    return (
        <div className='page'>
            {/* Verificar si proyecto no es undefined antes de acceder a sus propiedades */}
            {proyecto && (
                <>
                    <h1>{proyecto.nombre}</h1>
                    <h2>{proyecto.url}</h2>
                    <a href={"https://"+proyecto.url} target='_blank'>ir al proyecto</a>
                    {/* Agrega el contenido adicional que desees mostrar aquí */}
                </>
            )}
        </div>
    );
};