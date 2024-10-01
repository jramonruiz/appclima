import React from 'react';

export function Acerca_de() {
return (
    <div className="shadow-box_acerca_de">
        <p className="texto_temperatura_diario">
            <span className='valor'>Applicacion Front End sobre pronostico del clima</span></p>
        <p className="texto_temperatura_diario">Mi nombre es <b>Jose Ramon Ruiz Torres</b>, soy originario del estado de Chiapas, soy 
           Ingeniero en Sistemas Computacionales y tengo 15 años de experiencia como programador, en estos momentos me encuentro 
           en la busqueda de trabajo.</p>
        <p className="texto_temperatura_diario">
            <span className='valor'>Datos de contacto:</span>
        </p>
        <p className="texto_temperatura_diario">
            <b>Correo electronico: </b><a href='#' target='_blank'>jramonruiz@gmail.com</a>
        </p>
        <p className="texto_temperatura_diario">
            <b>Whatsapp: </b><a href='https://api.whatsapp.com/send?phone=9631599269' target='_blank'>963 159 92 69</a> 
        </p>
        <p className="texto_temperatura_diario">
            <b>Linkedin: </b><a href='https://www.linkedin.com/in/jose-ramon-ruiz-torres-96270745/' target='_blank'>https://www.linkedin.com/in/jose-ramon-ruiz-torres-96270745/</a>
        </p>   
        <p className="texto_temperatura_diario">Esta aplicacion esta obtiene los datos de la API de accuweather por el lado del Backend 
            y por el lado del Frontend desarrrollado en la siguientes tecnologia:</p>   
        <p className="texto_temperatura_diario">   
            <ul>
                <li>React Js 18.0</li>
                <li>React-dom-router</li>
                <li>Axios</li>
                <li>Consumiendo la API de accuweather</li>
            </ul>
        </p>
    </div>
  );
}

export default Acerca_de;