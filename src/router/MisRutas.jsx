import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Inicio } from '../Components/inicio'
import { Portafolio } from '../Components/portafolio'
import { Servicios } from '../Components/Servicios'
import { Contacto } from '../Components/Contacto'
import { Curriculum } from '../Components/Curriculum'
import { HeaderNav } from '../Components/layout/HeaderNav'
import { Footer } from '../Components/layout/Footer'
import { Proyecto } from '../Components/Proyectos'


export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* Header y navegacion */}
            <HeaderNav />
            <hr />

            {/* contenido central */}
            <section className='contenido'>
                <Routes>
                    <Route path='/' element={<Navigate to="/inicio" />} />

                    <Route path='/Inicio' element={<Inicio />} />

                    <Route path='/Portafolio' element={<Portafolio />} />

                    <Route path='/Servicios' element={<Servicios />} />

                    <Route path='/Curriculum' element={<Curriculum />} />

                    <Route path='/Contacto' element={<Contacto />} />

                    <Route path='/Proyecto/:id' element={<Proyecto/>} />


                    <Route path='*' element={<h1 className='heading'>error 404</h1>} />


                    
                </Routes>
            </section>



            {/* Footer*/}
            <Footer />

        </BrowserRouter>
    )
}
