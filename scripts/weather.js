const currentDate = Date.now();

/** CURRENT WEATHER */
const iconElem = document.querySelector(".weather-condition");
const windSpeed = document.querySelector(".humidity");
const url1 = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,CA,US&units=metric&appid=0874fda4b0c5e7c7d087937b085abaea";

async function apiFetch1(){
    try{
        const response = await fetch(url1);
        if (response.ok){
            const data = await response.json();
            displayResults1(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults1(data){
    //console.log(data);
    const displayCurrentWeather = document.querySelector(".weather-condition");
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description.split(" ");
    for (let i=0; i<desc.length; i++){
        desc[i] = desc[i].charAt(0).toUpperCase() + desc[i].slice(1);
    }
    const description = desc.join(" ");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src", iconSrc);
    img.setAttribute("alt", `${desc} icon`);
    figure.appendChild(img);
    const caption = document.createElement("figcaption");
    caption.style.textAlign = "center";
    caption.innerHTML = `<strong>${description}</strong>`;
    figure.appendChild(caption);
    figure.style.textAlign = "center";
    displayCurrentWeather.appendChild(figure);

    const temp = data.main.temp.toFixed(0);
    const temperature = document.createElement("span");
    temperature.innerHTML = `<span><strong>${temp}</strong></span> &#8451;`;
    temperature.style.fontSize = "2rem";
    displayCurrentWeather.appendChild(temperature);

    const humidity = data.main.humidity.toFixed(0);
    const displayHumidity = document.querySelector(".humidity");
    displayHumidity.textContent = `${humidity} %`;
}

apiFetch1();

/** FORECAST */
const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,CA,US&units=metric&appid=0874fda4b0c5e7c7d087937b085abaea";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json()
            //console.log(data);
            showResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function showResults(data){
    const forecast = document.querySelector(".forecast");
    
    for (let i = 5; i < 22; i+=8){
        const article = document.createElement("article");

        // day of week
        const h3 = document.createElement("h3");
        const date = new Date(data.list[i].dt_txt)        
        switch (date.getDay()){
            case 0:
                h3.textContent = "Sunday";
                break;
            case 1:
                h3.textContent = "Monday";
                break;
            case 2:
                h3.textContent = "Tuesday";
                break;
            case 3:
                h3.textContent = "Wednesday";
                break;
            case 4:
                h3.textContent = "Thursday";
                break;
            case 5:
                h3.textContent = "Friday";
                break;
            case 6:
                h3.textContent = "Saturday";
                break;
        }
        article.appendChild(h3);

        // hour
        const spanHour = document.createElement("span");
        spanHour.textContent = data.list[i].dt_txt.substring(11);
        article.appendChild(spanHour);
        
        // weather icon
        const figure = document.createElement("figure");        
        const iconSrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
        const img = document.createElement("img");        
        img.setAttribute("src", iconSrc);
        img.setAttribute("alt", data.list[i].weather[0].description);
        //img.style.margin = "0 auto";
        const displayDescription = document.createElement("figcaption");
        const desc = data.list[i].weather[0].description.split(" ");
        for (let i=0; i<desc.length; i++){
            desc[i] = desc[i].charAt(0).toUpperCase() + desc[i].slice(1);
        }
        const description = desc.join(" ");
        displayDescription.innerHTML = `<strong>${description}</strong>`;
        figure.appendChild(img);
        figure.appendChild(displayDescription);
        article.appendChild(figure);

        //temp max
        const spanTmax = document.createElement("span");
        spanTmax.innerHTML = `${data.list[i].main.temp_max} &#8451;`;
        article.appendChild(spanTmax);

        // temp min
        const spanTmin = document.createElement("span");
        spanTmin.innerHTML = `${data.list[i].main.temp_min} &#8451;`;
        article.appendChild(spanTmin);
        
        article.style.display = "flex";
        article.style.flexDirection = "column";
        article.style.borderTop = "0.05rem dashed var(--primary-color)";
        forecast.appendChild(article);
    }
    //console.log(data.list);
}

apiFetch();

/** Showing number of drinks served */
const showDrinksServed = document.querySelector("#number-drinks-served");
const drinksServed = Number(window.localStorage.getItem("drinks-served-number"));
showDrinksServed.textContent = drinksServed;
//console.log(drinksServed);