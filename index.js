let city = document.querySelector('.js-city');
let temp = document.querySelector('.js-temp');
let type = document.querySelector('.js-type');
let image = document.querySelector('.js-img');
let input = document.querySelector('.js-input');
let API_Key = "c3ff8f1ed17bfccd4d387a9e5c00aca5";

const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}&units=metric`);
    let jsondata = await getData.json();
    console.log(jsondata);

    if (jsondata.cod == 400) {

        city.innerHTML = "";
        image.src = "error1.png";
        alert("Please Enter Location!");
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    if (jsondata.cod == 404) {
        city.innerHTML = search;

        image.src = "error2.png";
        alert("Please Enter Right Location!");
        temp.innerHTML = "";
        type.innerHTML = "";
    }

    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsondata.main.temp) + "°C";
    type.innerHTML = jsondata.weather[0].main;



    if (type.innerHTML == "Clouds") {
        image.src = "clouds.png";
    }

    else if (type.innerHTML == "Clear") {
        image.src = "clears.png"
    }

    else if (type.innerHTML == "Haze") {
        image.src = "haze.png"
    }

    else if (type.innerHTML == "Rain") {
        image.src = "rain.png"
    }

    else if (type.innerHTML == "Strom") {
        image.src = "strom.png"
    }
}

function myFun() {
    search = input.value;
    data(search);
    input.value = '';
}

document.body.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        search = input.value;
        data(search);
        input.value = '';

    }
});

