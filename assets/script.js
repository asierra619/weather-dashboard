var APIKey = 'a6d022da472d63085f72ab99335f601d';

function handleCitySearch() {
    document.querySelector('.search-btn').addEventListener('click', async function citySearch(){
    console.log(document.querySelector('input').value)
    const cityName = document.querySelector('input').value
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIKey}`);
    const data = await response.json();
    console.log(data);
    const temp = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const icon = data.weather[0].icon;
    // dayjs - pass dt as date to extract from data
    })
};

// create card and append it to screen
// call second api for 5 day forecast with lat and lon
// use a forloop to automatically make the 5 cards
// append all city names that are searched into the city list (local storage)
// put each // into separate functions as they can be called when needed


handleCitySearch();
