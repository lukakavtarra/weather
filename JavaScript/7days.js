let button = document.querySelector("#button");
let inputValue = document.querySelector(".inputValue");
let name = document.getElementById("todaytname");
let firstWeather = document.getElementById("todaydisplay");
let secondWeather = document.getElementById("1display");
let thirdWeather = document.getElementById("2display");
let fourthWeather = document.getElementById("3display");
let fifthWeather = document.getElementById("4display");
let firstDate = document.getElementById("todayDate");
let secondDate = document.getElementById("1Date");
let thirdDate = document.getElementById("2Date");
let fourthDate = document.getElementById("3Date");
let fifthDate = document.getElementById("4Date");
let firstDesc = document.getElementById("todaydesc");
let secondDesc = document.getElementById("1desc");
let thirdDesc = document.getElementById("2desc");
let fourthDesc = document.getElementById("3desc");
let fifthDesc = document.getElementById("4desc");
let firstFeels = document.getElementById("todayFeelsLike");
let secondFeels = document.getElementById("1FeelsLike");
let thirdFeels = document.getElementById("2FeelsLike");
let fourthFeels = document.getElementById("3FeelsLike");
let fifthFeels = document.getElementById("4FeelsLike");
let firstMinTemp = document.getElementById("todaytemp_min");
let secondMinTemp = document.getElementById("1temp_min");
let thirdMinTemp = document.getElementById("2temp_min");
let fourthMinTemp = document.getElementById("3temp_min");
let fifthMinTemp = document.getElementById("4temp_min");
let firstMaxTemp = document.getElementById("todaytemp_max");
let secondMaxTemp = document.getElementById("1temp_max");
let thirdMaxTemp = document.getElementById("2temp_max");
let fourthMaxTemp = document.getElementById("3temp_max");
let fifthMaxTemp = document.getElementById("4temp_max");
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

button.addEventListener("click", function() {
    //Fetching Data

    fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            inputValue.value +
            "&appid=12815cdc6b60677ea338e0d4b0de04be"
        )
        .then((response) => response.json())
        .then((data) => {
            //getting data
            console.log(data);
            let nameValue = data["city"]["name"];
            name.innerHTML = nameValue;
            // WEEKLY WEATHER
            let weeklyFirstWeather,
                weeklySecondWeather,
                weeklyThirdWeather,
                weeklyFourthWeather,
                weeklyFifthWeather;
            [
                weeklyFirstWeather,
                weeklySecondWeather,
                weeklyThirdWeather,
                weeklyFourthWeather,
                weeklyFifthWeather,
            ] = [
                data["list"][0]["main"]["temp"],
                data["list"][8]["main"]["temp"],
                data["list"][16]["main"]["temp"],
                data["list"][24]["main"]["temp"],
                data["list"][32]["main"]["temp"],
            ];
            firstWeather.innerHTML =
                "გრადუსი: " + Math.round(weeklyFirstWeather - 273.15) + "°";
            secondWeather.innerHTML =
                "გრადუსი: " + Math.round(weeklySecondWeather - 273.15) + "°";
            thirdWeather.innerHTML =
                "გრადუსი: " + Math.round(weeklyThirdWeather - 273.15) + "°";
            fourthWeather.innerHTML =
                "გრადუსი: " + Math.round(weeklyFourthWeather - 273.15) + "°";
            fifthWeather.innerHTML =
                "გრადუსი: " + Math.round(weeklyFifthWeather - 273.15) + "°";

            // DATE
            let weeklyFirstDate,
                weeklySecondDate,
                weeklyThirdDate,
                weeklyFourthDate,
                weeklyFifthDate;
            [
                weeklyFirstDate,
                weeklySecondDate,
                weeklyThirdDate,
                weeklyFourthDate,
                weeklyFifthDate,
            ] = [
                new Date(data["list"][0]["dt_txt"]),
                new Date(data["list"][8]["dt_txt"]),
                new Date(data["list"][16]["dt_txt"]),
                new Date(data["list"][24]["dt_txt"]),
                new Date(data["list"][32]["dt_txt"]),
            ];
            firstDate.innerHTML = weekday[weeklyFirstDate.getDay()];
            secondDate.innerHTML = weekday[weeklySecondDate.getDay()];
            thirdDate.innerHTML = weekday[weeklyThirdDate.getDay()];
            fourthDate.innerHTML = weekday[weeklyFourthDate.getDay()];
            fifthDate.innerHTML = weekday[weeklyFifthDate.getDay()];

            //Weather Type

            const gettingWeatherType = [
                firstDesc,
                secondDesc,
                thirdDesc,
                fourthDesc,
                fifthDesc,
            ];

            // Feels Like

            const gettingFeels = [
                firstFeels,
                secondFeels,
                thirdFeels,
                fourthFeels,
                fifthFeels,
            ];

            //  Min Temperature

            const gettingMinTemp = [
                firstMinTemp,
                secondMinTemp,
                thirdMinTemp,
                fourthMinTemp,
                fifthMinTemp,
            ];

            const gettingMaxTemp = [
                firstMaxTemp,
                secondMaxTemp,
                thirdMaxTemp,
                fourthMaxTemp,
                fifthMaxTemp,
            ];
            let j = 0;

            for (let i = 0; i < 33; i += 8) {
                //max temp
                gettingMaxTemp[j].innerHTML =
                    "მაქს. ტემპერატურა: " +
                    (data["list"][i]["main"]["temp_max"] - 273.15).toFixed(1) +
                    "°";
                //min temp
                gettingMinTemp[j].innerHTML =
                    "მინ. ტემპერატურა: " +
                    (data["list"][i]["main"]["temp_min"] - 273.15).toFixed(1) +
                    "°";
                //feels like
                gettingFeels[j].innerHTML =
                    "მგრძნობელობა: " +
                    Math.round(data["list"][i]["main"]["feels_like"] - 273.15) +
                    "°";
                gettingWeatherType[j].innerHTML =
                    data["list"][i]["weather"][0]["description"];
                j++;
            }

            //add styling
            let weatherDivs = document.querySelectorAll(".weather-div");
            for (let i = 0; i < weatherDivs.length; i++) {
                weatherDivs[i].className = "border";
            }
        })
        .catch((err) => alert("Error #404 -> Wrong City"));
});