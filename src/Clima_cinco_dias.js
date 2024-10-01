import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Clima_cinco_dias() {
        const [data, setData] = useState();
        const [date, setDate] = useState([]);
        const [frasedia, setIconphraseday] = useState([]);

        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        const [pronosticos, setPronosticos] = useState([]);
      
        const fechaHoy = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fechaHoy.toLocaleDateString('es-ES', opciones);
      
      
        useEffect(() => {
            const fetchClima_cinco_dias = async () => {
                try {

                    const fdia = [];
                    let i = 0; // Comenzamos desde 1
                        while (i < 6) 
                            {
        
                    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/231934?apikey=TUAPIKEY&language=es-mx&details=true&metric=true`);
                    setData(response.data); // Guardar datos de clima
                    setDate(response.data.DailyForecasts[i].Date);

                    const xdiafrase = response.data.DailyForecasts[i].Day.IconPhrase;
                    const xiconodia = 'https://www.awxcdn.com/adc-assets/images/weathericons/'+response.data.DailyForecasts[i].Day.Icon+'.svg';
                    const xprobprecipitaciondia = response.data.DailyForecasts[i].Day.PrecipitationProbability;
                    const xhorasprecipitaciondia = response.data.DailyForecasts[i].Day.HoursOfPrecipitation;
                    const xmmprecipitacionesdia = response.data.DailyForecasts[i].Day.TotalLiquid.Value;

                    const xnochefrase = response.data.DailyForecasts[i].Night.IconPhrase;
                    const xiconnoche = 'https://www.awxcdn.com/adc-assets/images/weathericons/'+response.data.DailyForecasts[i].Night.Icon+'.svg';
                    const xprobprecipitacionnoche = response.data.DailyForecasts[i].Night.PrecipitationProbability;
                    const xhorasprecipitacionnoche = response.data.DailyForecasts[i].Night.HoursOfPrecipitation;
                    const xmmprecipitacionesnoche = response.data.DailyForecasts[i].Night.TotalLiquid.Value;

                    const fecha_pronostico_completa = response.data.DailyForecasts[i].Date;
                    const fecha_pronostico = fecha_pronostico_completa.split("T");
                    const pronostico_fecha = fecha_pronostico[0];
      
                    fdia.push({ id: i, frase_del_dia: xdiafrase, icono_del_dia: xiconodia, 
                        probprec_dia: xprobprecipitaciondia, hrsprec_dia: xhorasprecipitaciondia, 
                    mmprec_dia: xmmprecipitacionesdia, frase_del_noche: xnochefrase, icono_del_noche: xiconnoche, 
                    probprec_noche: xprobprecipitacionnoche, hrsprec_noche: xhorasprecipitacionnoche, 
                mmprec_noche: xmmprecipitacionesnoche, pronostico_fecha: pronostico_fecha });

                    setPronosticos(fdia);
                    
                
                    i++;
                }// cierre del while
        
                            
                } catch (err) {
                    setError('No se pudo obtener el clima. Intenta de nuevo.');
                } finally {
                    setLoading(false); // Cambiar el estado de carga
                }
            };
      
            fetchClima_cinco_dias(); // Llamar a la función para obtener datos

        }, []); // Ejecutar solo al montar el componente      

return (        
        <table width="100%">
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
                <td colspan="3" align="center">CLIMA DE LOS PROXIMOS CINCO DIAS</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          {pronosticos.map(pronostico => (
            <tr key={pronostico.id}>
                <td>    
                    <div className="shadow-box">
                    <p className="texto_temperatura_diario">
                        <span className='valor'>DIA: {pronostico.pronostico_fecha}</span></p>    
                    <p className="texto_temperatura_diario">
                        <img src={pronostico.icono_del_dia} height="40" width="40" />
                            <span className='valor'>{pronostico.frase_del_dia}</span></p>
                    <p className="texto_temperatura_diario">
                            <span className='label'>Probabilidad precipitacion:</span>
                            <span className='valor'>{pronostico.probprec_dia} %</span></p>
                    <p className="texto_temperatura_diario">
                            <span className='label'>Duracion de precitacion:</span>
                            <span className='valor'>{pronostico.hrsprec_dia} hrs</span></p>                                
                    <p className="texto_temperatura_diario">
                            <span className='label'>Cantidad precipitacion:</span>
                            <span className='valor'>{pronostico.mmprec_dia} mm</span></p>                                
                    </div><br />
                </td>
                <td>
                    &nbsp;
                </td>
                <td>    
                    <div className="shadow-box">
                    <p className="texto_temperatura_diario">
                        <span className='valor'>NOCHE: {pronostico.pronostico_fecha}</span></p>    
                    <p className="texto_temperatura_diario">
                        <img src={pronostico.icono_del_noche} height="40" width="40" />
                            <span className='valor'>{pronostico.frase_del_noche}</span></p>
                    <p className="texto_temperatura_diario">
                            <span className='label'>Probabilidad precipitacion:</span>
                            <span className='valor'>{pronostico.probprec_noche} %</span></p>
                    <p className="texto_temperatura_diario">
                            <span className='label'>Duracion de precitacion:</span>
                            <span className='valor'>{pronostico.hrsprec_noche} hrs</span></p>                                
                    <p className="texto_temperatura_diario">
                            <span className='label'>Cantidad precipitacion:</span>
                            <span className='valor'>{pronostico.mmprec_noche} mm</span></p>                                
                    </div><br />
                </td>
            </tr>
          ))}
      </table>        
  );
}

export default Clima_cinco_dias;
