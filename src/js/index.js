import { getDate, getTime } from "./date&time";
import { getTemp } from "./weather-api";
import { searchListener } from './searchListener';


console.log(getDate());
console.log(getTime());

const res = getTemp('Mansoura');
// console.log(res.json());
console.log('res' + res);
console.log('getTemp: ' + getTemp('Mansoura,eg'));

// WeatherApiKey: 869031f710664068915153856231407
let key2 = "aa039a9ebfmsh634302897689a72p1cdb7fjsn1ccc8fd8fd87";
let temp_c = 20;
let location = 'Cairo';
let humidity = 80;
let country = 'Egypt';
let lat = 0, lon = 0;


const weatherApiKey = '869031f710664068915153856231407';
let url2 = "";



// status, city, country, temp, wind, humidity, feelslike
let city_ = 'Mansoura'
let country_ = 'Egypt';
// let status_ = 'Clear';
// let tmp_ = 28;
// let wind_ = 10;
// let date_ = now.getFullYear() + "/" + (now.getMonth()+1) + "/" + now.getDate();
// let time_ = now.getHours();
// let humidity_ = '40%';


// console.log(year_ + "/" + month_ + "/" + day_);

// console.log(date_);
// console.log(time_);
// const url = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city_},${country_}&aqi=no`
// const img = document.getElementById('icon');
// function gett() {
//     fetch(url, {mode: 'cors'})
//     .then(function(respnse) {
//         return respnse.json();
//     })
//     .then(function(respnse) {
//         console.log(respnse);
        
//         console.log("Location: " + respnse.location.country);
//         console.log("Weather Deg: " + respnse.current.feelslike_c);
//         console.log("Condition: " + respnse.current.condition.text);
//         console.log("City: " + respnse.location.name);
//         console.log("Wind MPH: " + respnse.current.wind_mph);
//         img.src = respnse.current.condition.icon;
//     })
//     .catch(function (error) {
//         console.log(error);
//         return error;
//     })

//     url2 = `https://sunrise-sunset-times.p.rapidapi.com/?rapidapi-key=${key2}&getSunriseAndSunset?date=2021-10-31&latitude=51.5072&longitude=-0.1276&timeZoneId=America%2FNew_York`;
//     url2 = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today';

//     fetch(url2, {mode: 'cors'})
//     .then(function(respnse) {
//         return respnse.json();
//     })
//     .then(function(respnse) {
//         console.log(respnse);
//     })
// }


// const url2 = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city_},${country_}&aqi=no`
// function gett2() {
//     fetch(url, {mode: 'cors'})
//     .then(function(respnse) {
//         return respnse.json();
//     })
//     .then(function(respnse) {
//         console.log(respnse);

//         console.log("Location: " + respnse.location.country);
//         console.log("Weather Deg: " + respnse.current.feelslike_c);
//         console.log("Condition: " + respnse.current.condition.text);
//         console.log("City: " + respnse.location.name);
//     })
//     .catch(function (error) {
//         console.log(error);
//         return error;
//     })
// }


// gett();


searchListener();

// async function getCurrentWeather(city, apiKey) {
//     const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
//     const response = await fetch(apiUrl);
//     console.log(response);
//     const data = await response.json();
//     const weatherDescription = data.current.condition.text;
//     const temperature = data.current.temp_c;
//     const feelsLike = data.current.feelslike_c;
//     const humidity = data.current.humidity;
//     console.log(weatherDescription);
//     console.log(temperature);
//     console.log(feelsLike);
//     console.log(humidity);
//     // console.log();
//     return { weatherDescription, temperature, feelsLike, humidity };
// }



// const apiKey = '869031f710664068915153856231407';
// const city = 'London';
// getCurrentWeather(city, apiKey)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));



// const on = document.getElementById('on');
// const off = document.getElementById('off');
// const img = document.getElementById('gif');
// const searchBtn = document.getElementById('search');
// const input = document.getElementById('input');


// searchBtn.addEventListener('click', () => {
//     if(input.value != "" && input.value != null) {
//         let url = `https://api.giphy.com/v1/gifs/translate?api_key=1e6ObMjF2eIpNxlvNOSzwSuWZkg8oLqM&s=${input.value}`; 
//         console.log(url);

//         fetch(url, {mode: 'cors'})
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             console.log(response);
//             img.src = response.data.images.original.url;
//         })
//     }
//     console.log(input.value);
// })

// on.addEventListener('click', () => {
//     img.style.display = 'inline-block';
//     let rand = Math.random();
//     let char = rand * 26;
//     char = parseInt(char, 10) + 65;
//     char = String.fromCharCode(char);
//     let url = `https://api.giphy.com/v1/gifs/translate?api_key=1e6ObMjF2eIpNxlvNOSzwSuWZkg8oLqM&s=${char}`; 
    
//     console.log(url);

//     fetch(url, {mode: 'cors'})
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         console.log(response);
//         img.src = response.data.images.original.url;
//     })
// });


// off.addEventListener('click', () => {
//     img.style.display = 'none';
// })