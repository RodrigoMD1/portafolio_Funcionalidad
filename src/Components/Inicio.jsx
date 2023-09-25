import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div>
      <h1>
        hola soy rodrigo soy desarrollador web de argentina
      </h1>

      <h2>
        te ayudo a crear tu sitio web. <Link to={"/Contacto"}>contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2>
          algunos de mis proyectos
        </h2>
        <p>
          estos son algunos de mis trabajos de desarrollo web
        </p> 

        <br />
        <br />
        <br />

       <ListadoTrabajos limite="2"/>


      </section>
    </div>
  )
}
