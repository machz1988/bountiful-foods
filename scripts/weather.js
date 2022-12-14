const weather_date1 = document.querySelector(".weather-date1");
const icon_elem1 = document.querySelector(".condition-icon1");
const wind_speed1 = document.querySelector(".wind-speed1");
const wind_chill1 = document.querySelector(".wind-chill1");
const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,CA,US&units=metric&appid=0874fda4b0c5e7c7d087937b085abaea";
//const url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.158267&lon=-117.350996&exclude=daily&units=metric&appid=0874fda4b0c5e7c7d087937b085abaea";

//let temp_c = 0;
//let wind_speed_kmh = 0;

const now = Date.now();
//console.log(now);
console.log(parseInt(now/1000)+86400-72000);

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json()
            console.log(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

apiFetch();