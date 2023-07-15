import { getTemp } from "./weather-api";


function searchListener() {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = input.value;

        getTemp(value);
    })
}


export { searchListener }