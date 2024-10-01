import React, { useState, useEffect } from 'react';

/*export function Navegacion() {
    return (
        <nav>
            <ul>
                <Link to='/'>Clima hoy</Link>
                <Link to='/clima_cinco_dias'>Clima Cinco dias</Link>
            </ul>
        </nav>
    );
}*/

export function Navegacion() { 
    return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#inicio">Inicio</a></li>
        <li className="navbar-item"><a href="#acerca-de">Acerca de</a></li>
        <li className="navbar-item"><a href="#nosotros">Nosotros</a></li>
        <li className="navbar-item"><a href="#mision">Misión</a></li>
        <li className="navbar-item"><a href="#vision">Visión</a></li>
        <li className="navbar-item"><a href="#valores">Valores</a></li>
      </ul>
    </nav>
    )
}

export default Navegacion;
