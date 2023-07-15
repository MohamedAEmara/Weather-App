const location = document.getElementById('line-two');
const status = document.getElementById('line-one')
const l1 = document.getElementById('one');
const l2 = document.getElementById('two');
const l3 = document.getElementById('three');



async function getTemp(city) {
    let key = '869031f710664068915153856231407';
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
    const input = document.getElementById('input');
    fetch(url, {mode: 'cors'})
    .then(function(respnse) {
        return respnse.json();
    })
    .then(function(respnse) {
        console.log(respnse);
        status.innerHTML = respnse.current.condition.text;
        location.innerHTML = respnse.location.name + ", " + respnse.location.country;
        l1.innerHTML = "Feels Like: " + (respnse.current.feelslike_c);
        l2.innerHTML = 'Wind: ' + (respnse.current.wind_kph) + " Km/h";
        l3.innerHTML = 'Humidity: ' + (respnse.current.humidity) + '%';
        console.log("Location: " + respnse.location.country);
        console.log("Weather Deg: " + respnse.current.feelslike_c);
        console.log("Condition: " + respnse.current.condition.text);
        console.log("City: " + respnse.location.name);
        console.log("Wind MPH: " + respnse.current.wind_mph);
        // img.src = respnse.current.condition.icon;
    })
    .catch(function (error) {
        console.log('error' + error);
        alert('Please input a valid city!');
        input.value = '';
        return error;
    })
}


export { getTemp }

