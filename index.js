const body = document.querySelector('body')
const container = document.querySelector('.container');
const searchBox = document.querySelector('.searchBox');
const notFound = document.querySelector('.notFound');
const weatherBox = document.querySelector('.weatherBox');
const weatherDetails = document.querySelector('.weatherDetails');
const darkmode = document.querySelector('.darkmode')
const toggle = document.getElementById('toggleDark');
const input = document.querySelector('.searchBox input');
const i = document.querySelector('.searchBox i');
const button = document.querySelector('.searchBox button');
const placeholder = document.getElementById('placeholder');
const temp = document.querySelector('.weatherBox .temperature');
const tempmin = document.querySelector('.weatherBox .temperaturemin');
const tempmax = document.querySelector('.weatherBox .temperaturemax');
const tempdesc = document.querySelector('.weatherBox .description');
const weatherDetHum = document.querySelector('.weatherDetails .humidity');
const weatherDetWind = document.querySelector('.weatherDetails .wind');
const weatherDetPre = document.querySelector('.weatherDetails .pressure');
const weatherDetFel = document.querySelector('.weatherDetails .feels_like');
const notFoundText = document.querySelector('.notFound div');
const weatherIcon = document.querySelector('.weatherDetails i');
const weatherIcon2 = document.querySelector('.weatherDetails i2');
const weatherIcon3 = document.querySelector('.weatherDetails i3');
const weatherIcon4= document.querySelector('.weatherDetails i4');
const weatherTextHum = document.querySelector('.weatherDetails p');
const weatherTextWind = document.querySelector('.weatherDetails .wind p');
const weatherTextPre = document.querySelector('.weatherDetails .pressure p');
const weatherTextFel = document.querySelector('.weatherDetails .feels_like p');
const weatherInfoHum = document.querySelector('.weatherDetails span');
const weatherInfoWind = document.querySelector('.weatherDetails .wind span');
const weatherInfoPre = document.querySelector('.weatherDetails .pressure span');
const weatherInfoFel = document.querySelector('.weatherDetails .feels_like span');



placeholder.onfocus = function () {
        if(this.placeholder === 'location') {
            this.placeholder = '';
        }
    };

placeholder.onblur = function () {
        if(this.placeholder === '') {
            this.placeholder = 'location';
        }
    };

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.transition = '1s ease-in-out';
        searchBox.style.transition = '0.4s ease-in-out';
        input.style.transition = '0.4s ease-in-out';
        i.style.transition = '0.4s ease-in-out';
        button.style.transition = '0.4s ease-in-out';
        temp.style.transition = '0.4s ease-in-out';
        tempmin.style.transition = '0.4s ease-in-out';
        tempmax.style.transition = '0.4s ease-in-out';
        tempdesc.style.transition = '0.4s ease-in-out';
        weatherDetHum.style.transition = '0.4s ease-in-out';
        weatherDetWind.style.transition = '0.4s ease-in-out';
        weatherDetPre.style.transition = '0.4s ease-in-out';
        weatherDetFel.style.transition = '0.4s ease-in-out';
        notFoundText.style.transition = '0.4s ease-in-out';
        weatherIcon.style.transition = '0.4s ease-in-out';
        weatherIcon2.style.transition = '0.4s ease-in-out';
        weatherIcon3.style.transition = '0.4s ease-in-out';
        weatherIcon4.style.transition = '0.4s ease-in-out';
        weatherTextHum.style.transition = '0.4s ease-in-out';
        weatherTextWind.style.transition = '0.4s ease-in-out';
        weatherTextPre.style.transition = '0.4s ease-in-out';
        weatherTextFel.style.transition = '0.4s ease-in-out';

        body.style.background = 'url(images/body_bright2.png) bottom center fixed';
        body.style.color = 'white';
        container.style.color = 'white';
        container.style.background = '#fff';
        searchBox.style.background = '#fff';
        input.style.background = '#fff';
        i.style.color = '#717171';
        button.style.background = '#fff';
        button.style.color = '#717171';
        input.style.color = '#7cb8fd';
        temp.style.color = '#7cb8fd';
        tempmin.style.color = '#7cb8fd';
        tempmax.style.color = '#7cb8fd';
        tempdesc.style.color = '#717171';
        weatherDetHum.style.background = '#e9e9e9';
        weatherDetWind.style.background = '#e9e9e9';
        weatherDetPre.style.background = '#e9e9e9';
        weatherDetFel.style.background = '#e9e9e9';
        notFoundText.style.color = '#000';
        weatherIcon.style.color = '#7cb8fd';
        weatherIcon2.style.color = '#7cb8fd';
        weatherIcon3.style.color = '#7cb8fd';
        weatherIcon4.style.color = '#7cb8fd';
        weatherTextHum.style.color = '#717171';
        weatherTextWind.style.color = '#717171';
        weatherTextPre.style.color = '#717171';
        weatherTextFel.style.color = '#717171';
        weatherInfoHum.style.color = '#717171';
        weatherInfoWind.style.color = '#717171';
        weatherInfoPre.style.color = '#717171';
        weatherInfoFel.style.color = '#717171';

    } else {
        body.style.transition = '1s ease-in-out';
        searchBox.style.transition = '0.4s ease-in-out';
        input.style.transition = '0.4s ease-in-out';
        i.style.transition = '0.4s ease-in-out';
        button.style.transition = '0.4s ease-in-out';
        temp.style.transition = '0.4s ease-in-out';
        tempmin.style.transition = '0.4s ease-in-out';
        tempmax.style.transition = '0.4s ease-in-out';
        tempdesc.style.transition = '0.4s ease-in-out';
        weatherDetHum.style.transition = '0.4s ease-in-out';
        weatherDetWind.style.transition = '0.4s ease-in-out';
        weatherDetPre.style.transition = '0.4s ease-in-out';
        weatherDetFel.style.transition = '0.4s ease-in-out';
        notFoundText.style.transition = '0.4s ease-in-out';
        weatherIcon.style.transition = '0.4s ease-in-out';
        weatherIcon2.style.transition = '0.4s ease-in-out';
        weatherIcon3.style.transition = '0.4s ease-in-out';
        weatherIcon4.style.transition = '0.4s ease-in-out';
        weatherTextHum.style.transition = '0.4s ease-in-out';
        weatherTextWind.style.transition = '0.4s ease-in-out';
        weatherTextPre.style.transition = '0.4s ease-in-out';
        weatherTextFel.style.transition = '0.4s ease-in-out';
        
        body.style.background = 'url(images/body_dark2.png) no-repeat top center fixed';
        body.style.color = 'white';
        container.style.background = '#18294f';
        searchBox.style.background = '#18294f';
        input.style.background = '#18294f';
        i.style.color = '#fff';
        button.style.background = '#18294f';
        button.style.color = '#fff';
        input.style.color = '#fbe38c';
        temp.style.color = '#fbe38c';
        tempmin.style.color = '#fbe38c';
        tempmax.style.color = '#fbe38c';
        tempdesc.style.color = '#fff';
        weatherDetHum.style.background = '#253255';
        weatherDetWind.style.background = '#253255';
        weatherDetPre.style.background = '#253255';
        weatherDetFel.style.background = '#253255';
        notFoundText.style.color = '#fbe38c';
        weatherIcon.style.color = '#fbe38c';
        weatherIcon2.style.color = '#fbe38c';
        weatherIcon3.style.color = '#fbe38c';
        weatherIcon4.style.color = '#fbe38c';
        weatherTextHum.style.color = '#fff';
        weatherTextWind.style.color = '#fff';
        weatherTextPre.style.color = '#fff';
        weatherTextFel.style.color = '#fff';
        weatherInfoHum.style.color = '#fff';
        weatherInfoWind.style.color = '#fff';
        weatherInfoPre.style.color = '#fff';
        weatherInfoFel.style.color = '#fff';

    }
});

searchBox.addEventListener('click', searchLocation);

searchBox.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        searchLocation();
    }
});




function searchLocation() {
    //My own API key:
    const APIKey = '6ccd1d4c730359c8fa445096e248ce82';
    const city = document.querySelector('.searchBox input').value;
    const state = document.querySelector('.searchBox input').value;
  

   
    if (city == '' && state == '')
        return;
        //ALWAYS USE TILDA KEY ` ` TO INCLUDE API LINKS.
        //This openweathermaps API takes 'city' as input and outputs in imperial units. In the future, maybe change to API that takes 'city' and 'state code', or 'country code'.
        //openweathermaps.org API found here:
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${APIKey}`).then(response => response.json()).then(json => {

        //If user enters inelible location, hamster notFound image will display
        if(json.cod === '404') {
            container.style.height = '450px';
            container.style.width = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            notFound.style.display = 'flex';
            notFound.classList.add('fadeIn');
            return;
        }

        notFound.style.display = 'none';
        notFound.classList.remove('fadeIn');

////////IMPORTANT: Declaration of weather objects. If more is to be added, declare all new features and objects here.
////////.weatherBox for text in top region of app, .weatherDetails for more information in bottom region of app.
        const image = document.querySelector('.weatherBox img');
        const temperature = document.querySelector('.weatherBox .temperature');
        const temperaturemin = document.querySelector('.weatherBox .temperaturemin');
        const temperaturemax = document.querySelector('.weatherBox .temperaturemax')
        const description = document.querySelector('.weatherBox .description');
        const humidity = document.querySelector('.weatherDetails .humidity span');
        const wind = document.querySelector('.weatherDetails .wind span');
        const pressure = document.querySelector('.weatherDetails .pressure span')
        const feels_like = document.querySelector('.weatherDetails .feels_like span')

        //Corresponding weather images with weather descriptions. E.g. Clear sky = sun image.
        //Weather description derived from API weather.description is expressed in lowercase. Switch Case takes lowercase form from weather.description, NOT what's actually being written. All cases must be written in lowercase.
        //All images are stored in the directory, images/. Certain images are stored in their own styled directory. E.g. Cloud images are stored in the directory, images/clouds/.
        switch (json.weather[0].description) {
            case 'clear sky':
                image.src = 'images/clear.png';
                break;
            case 'few clouds':
                image.src = 'images/clouds/few_clouds.png';
                break; 
            case "overcast clouds":
                image.src = 'images/clouds/overcast_clouds.png';
                break;
            case "broken clouds":
                image.src = 'images/clouds/broken_clouds.png';
                break;
            case "scattered clouds":
                image.src = 'images/clouds/scattered_clouds.png';
                break;
            case 'Drizzle':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'light rain':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'moderate rain':
                image.src = 'images/rain/moderate_rain.png';
                break;
            case 'heavy intensity rain':
                image.src = 'images/rain/heavy_intensity_rain.png';
                break;
            case 'very heavy rain':
                image.src = 'images/rain/very_heavy_rain.png';
                break;
            case 'extreme rain':
                image.src = 'images/rain/extreme_rain.png';
                break;
            case 'freezing rain':
                image.src = 'images/rain/.png';
                break;
            case 'light intensity shower rain':
                image.src = 'images/rain/moderate_rain.png';
                break;
            case 'shower rain':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'heavy intensity shower rain':
                image.src = 'images/rain/moderate_rain.png';
                break;
            case 'ragged shower rain':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'haze':
                image.src = 'images/atmospheric/haze.png';
                break;
            case 'mist':
                image.src = 'images/atmospheric/mist.png';
                break;
            case 'fog':
                image.src = 'images/atmospheric/fog.png';
                break;
            case 'smoke':
                image.src = 'images/atmospheric/smoke.png';
                break;
            case 'mist':
                image.src = 'images/atmospheric/mist.png';
                break;
            case 'tornado':
                image.src = 'images/atmospheric/tornado.png';
                break;
            case 'volcanic ash':
                image.src = 'images/atmospheric/smoke.png';
                break;
            case 'dust':
                image.src = 'images/atmospheric/haze.png';
                break;
            case 'snow':
                image.src = 'images/snow/snow.png';
                break;
            case 'Snow':
                image.src = 'images/snow/snow.png';
                break;
            case 'Thunderstorm':
                image.src = 'images/rain/thunderstorm.png';
                break;
            default:
                image.src = '';
        }

////////IMPORTANT: This is where declared content is displayed on app. parseInt takes the string from data of API and turns it into a signed integer. If text is needed to coincide with API data, include before string or after string (within tilda).
////////ALWAYS USE TILDA KEY ` ` TO GET STRING FROM API.
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`;
        temperaturemin.innerHTML = `L: ${parseInt(json.main.temp_min)}<span>°</span>`;
        temperaturemax.innerHTML = `H: ${parseInt(json.main.temp_max)}<span>°</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)} mph  |  ${(json.wind.deg)}°`;
        pressure.innerHTML = `${(json.main.pressure)} hPa`;
        feels_like.innerHTML = `${(json.main.feels_like)}°F`;

        //Animation for entire container. Adjustment to height of container is available here. Width adjustment is also available, just add in: container.style.width = 'px';
        //Maybe increase width in the near future to contain more .weatherDetails because no more room in height.

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '750px';
        container.style.width = '520px';
    });
};

