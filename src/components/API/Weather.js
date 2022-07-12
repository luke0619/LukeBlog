// import classes from './Weather.module.css';
// import { Fragment, useCallback, useEffect, useState } from 'react';
// import { Card, Button } from 'react-bootstrap';

// const Weather = () => {
//     const [weather, setWeather] = useState({});

//     const WeatherHandler = useCallback(async () => {
//         try {
//             const response = await fetch('http://api.weatherstack.com/current?access_key=c6d4dae35cc3323e3515566cbbe3b204&query=Taipei');

//             if (!response.ok) {
//                 throw new Error('程式出現錯誤');
//             }

//             const data = await response.json();
//             const target = {
//                 city: data.location.name,
//                 temp: data.current.temperature,
//                 humid: data.current.humidity,
//                 icons: data.current.weather_icons,
//                 weather_description: data.current.weather_descriptions
//             }
//             setWeather(target);
//         }
//         catch (error) {
//             console.log('錯誤!');
//         }
//     }, [])

//     useEffect(() => {
//         WeatherHandler();
//     }, [WeatherHandler])

//     return (
//         <Fragment>
//             <div className={classes.weather}>
//                 <Card style={{ width: '12rem' }}>
//                     <Card.Img variant="top" src={weather.icons} as='img' />
//                     <Card.Body>
//                         <Card.Title>所在城市 : {weather.city}</Card.Title>
//                         <Card.Text>
//                             <h5>天氣狀況 : {weather.weather_description}</h5>
//                             <h5>溫度 : {weather.temp}</h5>
//                             <h5>濕度 : {weather.humid}</h5>
//                         </Card.Text>
//                         <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </Fragment>
//     )
// }

// export default Weather;

    // 'http://api.weatherstack.com/current?access_key=c6d4dae35cc3323e3515566cbbe3b204&query=Taipei'