// get input value
const inputValue = () => {
    const value = document.getElementById('search-input');
    loadData(value.value);
    value.value = '';
};
// get API response
const loadData = async city => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=405b86887d916f5ece71ad66adf9d2ef`);
    const data = await res.json();
    updateWeather(data);
};

const updateWeather = weather => {
    const weatherContainer = document.getElementById('weather');
    const feelsLike = Math.round(weather.main.feels_like / 8.587);
    const temp = weather.main.temp / 8.587;
    const country = (country) => {
        if (country == 'BD') {
        return 'Bangladesh';
    } else {
        return country;
    }
  }
    weatherContainer.innerHTML = `
            <h2>${weather.name}</h2>
            <h3>${country(weather.sys.country)}</h3>
            <h3>${temp.toFixed(1)}° C</h3>
            <h3>Feels like ${feelsLike}° C</h3>
            <h4>Clouds</h4>
    `;
}