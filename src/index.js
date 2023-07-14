// WeatherApiKey: 869031f710664068915153856231407

// let url = "https://api.weatherapi.com/v1/current.json?key=869031f710664068915153856231407&q=london";

let temp_c = 20;
let location = 'Cairo';
let humidity = 80;
let country = 'Egypt';

const weatherApiKey = '869031f710664068915153856231407';
let city_ = 'Mansoura', country_ = 'Egypt';

/*
feelslike_c17
feelslike_f: 62.6
gust_kph: 34.6
gust_mph: 21.5
humidity: 94
is_day: 1
last_updated: "2023-07-14 19:00"
last_updated_epoch: 1689357600
precip_in: 0.01
precip_mm: 0.2
pressure_in: 29.56
pressure_mb: 1001
temp_c
: 
17
temp_f
: 
62.6
uv
: 
4
vis_km
: 
3
vis_miles
: 
1
wind_degree
: 
160
wind_dir
: 
"SSE"
wind_kph
: 
22
wind_mph
: 
13.6
*/
const url = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city_},${country_}&aqi=no`
function gett() {
    fetch(url, {mode: 'cors'})
    .then(function(respnse) {
        return respnse.json();
    })
    .then(function(respnse) {
        console.log(respnse);
        
        console.log("Location: " + respnse.location.country);
        console.log("Weather Deg: " + respnse.current.feelslike_c);
        console.log("Condition: " + respnse.current.condition.text);
        console.log("City: " + respnse.location.name);
    })
    .catch(function (error) {
        console.log(error);
        return error;
    })
}


const url2 = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city_},${country_}&aqi=no`
function gett2() {
    fetch(url, {mode: 'cors'})
    .then(function(respnse) {
        return respnse.json();
    })
    .then(function(respnse) {
        console.log(respnse);

        console.log("Location: " + respnse.location.country);
        console.log("Weather Deg: " + respnse.current.feelslike_c);
        console.log("Condition: " + respnse.current.condition.text);
        console.log("City: " + respnse.location.name);
    })
    .catch(function (error) {
        console.log(error);
        return error;
    })
}


gett();


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