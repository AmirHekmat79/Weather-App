let $ = document ;
let picArray = ['url('+'./image/1.jpg'+')','url('+'./image/2.jpg'+')','url('+'./image/3.jpg'+')','url('+'./image/4.jpg'+')','url('+'./image/5.jpg'+')','url('+'./image/6.jpg'+')','url('+'./image/7.jpg'+')'];

setInterval(function(){
    let AccidentalIndex = Math.floor(Math.random() * 8 );
    $.body.style.backgroundImage = picArray[AccidentalIndex];
    $.body.style.backgroundPosition = 'center';
    $.body.style.backgroundSize = 'cover';
},4000)

let citiesDataStore = {
    tehran : {city : 'Tehran' , temp : 9 ,condition :'Windy' , Humidity : 5 , windSpeed :20 },
    isfahan : {city : 'Isfahan ' , temp : 23 ,condition :'Sunny' , Humidity : 10 , windSpeed :6 },
    shiraz : {city : 'Shiraz' , temp : 5 ,condition :'Rainy' , Humidity : 7 , windSpeed :4 },
    rasht : {city : 'Rasht' , temp : 9 ,condition :'Cloudy' , Humidity : 5 , windSpeed :3 },
    mashhad : {city : 'Mashhad' , temp : 4 ,condition :'Rainy' , Humidity : 4 , windSpeed :7 },
    abadan : {city : 'Abadan' , temp : 40 ,condition :'Sunny' , Humidity : 3 , windSpeed :10 },
    tabriz : {city : 'Tabriz' , temp : 1 ,condition :'Snowy' , Humidity : 5 , windSpeed :11 },
    lahijan : {city : 'Lahijan' , temp : 10 ,condition :'Cloudy' , Humidity : 5 , windSpeed :8 },
    shahrood : {city : 'Shahrood' , temp : -40 ,condition :'Snowy' , Humidity : 5 , windSpeed :16 }
}

let loadingContent = $.querySelector('.loadingContent');
let searchBTN = $.querySelector('.searchBtn');
let cityInput = $.querySelector('.cityInput');
let cityContent = $.querySelector('.cityContent');
let h1Content = $.querySelector('.title');
let tempContent = $.querySelector('.Degree');
let weatherType = $.querySelector('.weatherType');
let HtempContent = $.querySelector('.Htemp');
let SpeedContent = $.querySelector('.Speed');
loadingContent.style.padding = '20px';
loadingContent.style.boxShadow = '3px 3px 3px 3px black';

searchBTN.addEventListener('click' , function(){
    loadingContent.style.display = 'none';
    let chosenCity = cityInput.value;
    chosenCity = chosenCity.toLowerCase();
    let chosenCityData= citiesDataStore[chosenCity];
    if(chosenCityData){
        cityContent.style.display = 'block';
        h1Content.innerHTML ='Weather in ' + chosenCityData.city ;
        tempContent.innerHTML = chosenCityData.temp + '°C';
        weatherType.innerHTML =  chosenCityData.condition;
        HtempContent.innerHTML = 'Humidity : '+ chosenCityData.Humidity;
        SpeedContent.innerHTML = 'Wind speed : '+ chosenCityData.windSpeed + ' km/h';
    }else{
        alert('Enter A Correct City please!');
    }   
})