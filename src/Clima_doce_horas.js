import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Clima_doce_horas() {
        const [data, setData] = useState();
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null); 

        const [pronosticos_horas, setPronosticos_horas] = useState([]);
        
        
      
        useEffect(() => {
            const fetchClima_doce_horas = async () => {
                try {
                    const fhora = [];
                    let i = 0; // Comenzamos desde 1
                        while (i < 13) 
                            {  
                    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/231934?apikey=yvYA8xAwKShO6mmR0asfDI8TVST9sqdN&language=es-mx&details=true&metric=true`);
                    setData(response.data); // Guardar datos de clima   
                    const xdiafrase = response.data[i].IconPhrase;
                    const icono = response.data[i].WeatherIcon;
                    const temperatura = response.data[i].Temperature.Value;
                    const humedad = response.data[i].RelativeHumidity;
                    const probprecipitacion = response.data[i].PrecipitationProbability;
                    const indiceuv = response.data[i].UVIndex;
                    const textouv = response.data[i].UVIndexText;
                    const nubosidad = response.data[i].CloudCover;
                    const lluvia = response.data[i].TotalLiquid.Value;
                    const unidadlluvia = response.data[i].TotalLiquid.Unit;
                    const puntorocio = response.data[i].DewPoint.Value;
                    const unidadpuntorocio = response.data[i].DewPoint.Unit;
                    const vientovelocidad = response.data[i].Wind.Speed.Value;
                    const vientovelocidadunidad = response.data[i].Wind.Speed.Unit;
                    const vientodireccion = response.data[i].Wind.Direction.Localized;
                    const rafagasvelocidad = response.data[i].WindGust.Speed.Value;
                    const rafagasvelocidadunidad = response.data[i].WindGust.Speed.Unit;
                    const visibilidad = response.data[i].Visibility.Value;
                    const visibilidadunidad = response.data[i].Visibility.Unit;
                    const horario_completo_uno = response.data[i].DateTime;

                    const horario_completo = horario_completo_uno.split("T");
                    const horario_completo_dos = horario_completo[1];

                    const hora_completo = horario_completo_dos.split("-");
                    const hora = hora_completo[0];

  
                    
                    fhora.push({ id: i, frase_del_dia: xdiafrase, icono: icono, temperatura: temperatura, humedad:humedad, 
                        probprecipitacion: probprecipitacion, indiceuv: indiceuv, textouv:textouv, nubosidad:nubosidad, 
                        lluvia: lluvia, unidadlluvia: unidadlluvia, puntorocio: puntorocio, unidadpuntorocio: unidadpuntorocio, 
                        vientovelocidad: vientovelocidad, vientovelocidadunidad: vientovelocidadunidad, vientodireccion: vientodireccion, 
                        rafagasvelocidad: rafagasvelocidad, rafagasvelocidadunidad: rafagasvelocidadunidad, visibilidad: visibilidad, 
                        visibilidadunidad: visibilidadunidad, hora:hora });

                    setPronosticos_horas(fhora);
                    //setPronosticos(fpronostico);

                
                    i++;
                }// cierre del while

                console.log('entrando a la api');     


                } catch (err) {
                    setError('No se pudo obtener el clima. Intenta de nuevo.');
                    console.log('No se pudo obtener el clima');
                } finally {
                    setLoading(false); // Cambiar el estado de carga
                    console.log('cargando');
                }
            };
      
            fetchClima_doce_horas(); // Llamar a la función para obtener datos

        }, []); // Ejecutar solo al montar el componente      


  //console.log(fdia);

return (        
    <table width="100%">
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
          <td align="center">CLIMA DE LAS PROXIMAS DOCE HORAS</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    {pronosticos_horas.map(pronostico_hora => (
      <tr key={pronostico_hora.id}>
          <td>    
              <div className="shadow-box">

              <table width="100%">
                <tr>
                    <td colspan="4" align='center'>
                        <span className="valor">{pronostico_hora.hora}</span>
                    </td>
                </tr>
                <tr>
                    <td><span className="label">Prob. precipitación</span></td>
                    <td><span className="valor">{pronostico_hora.probprecipitacion} %</span></td>
                    <td><span className="label">Temperatura</span></td>
                    <td><span className="valor">{pronostico_hora.temperatura} ° C</span></td>
                </tr>
                <tr>
                    <td><span className="label">Indice UV Máx</span></td>
                    <td><span className="valor">{pronostico_hora.indiceuv} {pronostico_hora.textouv}</span></td>
                    <td><span className="label">Nubosidad</span></td>
                    <td><span className="valor">{pronostico_hora.nubosidad} %</span></td>
                </tr>
                <tr>
                    <td><span className="label">Viento</span></td>
                    <td><span className="valor">{pronostico_hora.vientodireccion} {pronostico_hora.vientovelocidad} {pronostico_hora.vientovelocidadunidad}</span></td>
                    <td><span className="label">Lluvia</span></td>
                    <td><span className="valor">{pronostico_hora.lluvia} {pronostico_hora.unidadlluvia}</span></td>
                </tr>
                <tr>
                    <td><span className="label">Ráfagas</span></td>
                    <td><span className="valor">{pronostico_hora.rafagasvelocidad} {pronostico_hora.rafagasvelocidadunidad}</span></td>
                    <td><span className="label">Visibilidad</span></td>
                    <td><span className="valor">{pronostico_hora.visibilidad} {pronostico_hora.visibilidadunidad}</span></td>
                </tr>
                <tr>
                    <td><span className="label">Húmedad</span></td>
                    <td><span className="valor">{pronostico_hora.humedad} %</span></td>
                    <td><span className="label">Punto de rocío</span></td>
                    <td><span className="valor">{pronostico_hora.puntorocio} {pronostico_hora.unidadpuntorocio}</span></td>
                </tr>          
            </table>
              </div><br />
          </td>
      </tr>
    ))}
</table>          
);
}

export default Clima_doce_horas;