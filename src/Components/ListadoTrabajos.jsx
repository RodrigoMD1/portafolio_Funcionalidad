import React from 'react';
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({limite}) => {
  return (
    <div>



      <section className='works'>
        {
          trabajos.slice(0,limite).map(trabajo => {

            return (

              <article key={trabajo.id}>

                <span>{trabajo.url}</span>

                <h2><Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link></h2>

                <h3>{trabajo.tecnologias}</h3>

                <br />

              </article>

            );
          })
        }

      </section>


    </div>
  );
};