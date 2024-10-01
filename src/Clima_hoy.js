import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Clima_hoy() {
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [tempminima, setTempminima] = useState();
  const [tempmaxima, setTempmaxima] = useState();
  const [frasedia, setIconphraseday] = useState();
  const [iconodia, setIconodia] = useState();
  const [probprecdia, setProbprecipitaciondia] = useState();
  const [horasprecipitaciondia, setHorasprecipitaciondia] = useState();
  const [mmprecitacionesdia, setMmprecipitacionesdia] = useState();
  
  const [frasenoche, setIconphrasenight] = useState();
  const [icononoche, setIcononoche] = useState();
  const [probprecnoche, setProbprecipitacionnoche] = useState();
  const [horasprecipitacionnoche, setHorasprecipitacionnoche] = useState();
  const [mmprecipitacionnoche, setMmprecipitacionesnoche] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fechaHoy = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = fechaHoy.toLocaleDateString('es-ES', opciones);


  useEffect(() => {
      const fetchClima = async () => {
          try {
              const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/231934?apikey=TUAPIKEY&language=es-mx&details=true&metric=true`);
              setData(response.data); // Guardar datos de clima
              setDate(response.data.DailyForecasts[0].Date);
              //$viento_vel=$datos["DailyForecasts"][$j]["Day"]["Wind"]["Speed"]["Value"];
              setTempminima(response.data.DailyForecasts[0].Temperature.Minimum.Value);
              setTempmaxima(response.data.DailyForecasts[0].Temperature.Maximum.Value);
              setIconphraseday(response.data.DailyForecasts[0].Day.IconPhrase);
              setIconodia(response.data.DailyForecasts[0].Day.Icon);
              setProbprecipitaciondia(response.data.DailyForecasts[0].Day.PrecipitationProbability);
              setHorasprecipitaciondia(response.data.DailyForecasts[0].Day.HoursOfPrecipitation);
              setMmprecipitacionesdia(response.data.DailyForecasts[0].Day.TotalLiquid.Value);

              // clima en la noche  
              setIconphrasenight(response.data.DailyForecasts[0].Night.IconPhrase);
              setIcononoche(response.data.DailyForecasts[0].Night.Icon);
              setProbprecipitacionnoche(response.data.DailyForecasts[0].Night.PrecipitationProbability);
              setHorasprecipitacionnoche(response.data.DailyForecasts[0].Night.HoursOfPrecipitation);
              setMmprecipitacionesnoche(response.data.DailyForecasts[0].Night.TotalLiquid.Value);

              //$datos["DailyForecasts"][$j]["Date"]
          } catch (err) {
              setError('No se pudo obtener el clima. Intenta de nuevo.');
          } finally {
              setLoading(false); // Cambiar el estado de carga
          }
      };

      fetchClima(); // Llamar a la función para obtener datos
  }, []); // Ejecutar solo al montar el componente

  console.log(tempmaxima);

  const urliconodia ='https://www.awxcdn.com/adc-assets/images/weathericons/'+iconodia+'.svg';
  const urlicononoche ='https://www.awxcdn.com/adc-assets/images/weathericons/'+icononoche+'.svg';
return (
                <table width="100%">
                    <tr>
                        <td colspan="3" align="center">CLIMA HOY: {fechaFormateada}</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="center">
                            <h3>Dia</h3>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td align="center">
                            <h3>Noche</h3>
                        </td>
                    </tr>   
                    <tr>
                        <td>    
                            <div className="shadow-box">
                            <p className="texto_temperatura_diario">
                                    <img src={urliconodia} height="40" width="40" />
                                    <span className='valor'>{frasedia}</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Temperatura minima:</span>
                                    <span className='valor'>{tempminima} C</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Temperatura maxima:</span>
                                    <span className='valor'>{tempmaxima} C</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Probabilidad precipitacion:</span>
                                    <span className='valor'>{probprecdia} %</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Duracion de precitacion:</span>
                                    <span className='valor'>{horasprecipitaciondia} hrs</span></p>                                
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Cantidad precipitacion:</span>
                                    <span className='valor'>{mmprecitacionesdia} mm</span></p>                                
                            </div><br />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>    
                            <div className="shadow-box">
                            <p className="texto_temperatura_diario">
                                <img src={urlicononoche} height="40" width="40" />
                                <span className='valor'>{frasenoche}</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Temperatura minima:</span>
                                    <span className='valor'>{tempminima} C</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Temperatura maxima:</span>
                                    <span className='valor'>{tempmaxima} C</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Probabilidad precipitacion:</span>
                                    <span className='valor'>{probprecnoche} %</span></p>
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Duracion de precitacion:</span>
                                    <span className='valor'>{horasprecipitacionnoche} hrs</span></p>                                
                                <p className="texto_temperatura_diario">
                                    <span className='label'>Cantidad precipitacion:</span>
                                    <span className='valor'>{mmprecipitacionnoche} mm</span></p>                                
                            </div><br />
                        </td>
                    </tr>
                </table>
              
  );
}

export default Clima_hoy;
