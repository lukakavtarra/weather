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

            [
                firstDesc.innerHTML,
                secondDesc.innerHTML,
                thirdDesc.innerHTML,
                fourthDesc.innerHTML,
                fifthDesc.innerHTML,
            ] = [
                data["list"][0]["weather"][0]["description"],
                data["list"][8]["weather"][0]["description"],
                data["list"][16]["weather"][0]["description"],
                data["list"][24]["weather"][0]["description"],
                data["list"][32]["weather"][0]["description"],
            ];
            // Feels Like

            [
                firstFeels.innerHTML,
                secondFeels.innerHTML,
                thirdFeels.innerHTML,
                fourthFeels.innerHTML,
                fifthFeels.innerHTML,
            ] = [
                "მგრძნობელობა: " +
                Math.round(data["list"][0]["main"]["feels_like"] - 273.15) +
                "°",
                "მგრძნობელობა: " +
                Math.round(data["list"][8]["main"]["feels_like"] - 273.15) +
                "°",
                "მგრძნობელობა: " +
                Math.round(data["list"][16]["main"]["feels_like"] - 273.15) +
                "°",
                "მგრძნობელობა: " +
                Math.round(data["list"][24]["main"]["feels_like"] - 273.15) +
                "°",
                "მგრძნობელობა: " +
                Math.round(data["list"][32]["main"]["feels_like"] - 273.15) +
                "°",
            ];

            //  Min Temperature

            [
                firstMinTemp.innerHTML,
                secondMinTemp.innerHTML,
                thirdMinTemp.innerHTML,
                fourthMinTemp.innerHTML,
                fifthMinTemp.innerHTML,
            ] = [
                "მინ. ტემპერატურა: " +
                (data["list"][0]["main"]["temp_min"] - 273.15).toFixed(1) +
                "°",
                "მინ. ტემპერატურა: " +
                (data["list"][8]["main"]["temp_min"] - 273.15).toFixed(1) +
                "°",
                "მინ. ტემპერატურა: " +
                (data["list"][16]["main"]["temp_min"] - 273.15).toFixed(1) +
                "°",
                "მინ. ტემპერატურა: " +
                (data["list"][24]["main"]["temp_min"] - 273.15).toFixed(1) +
                "°",
                "მინ. ტემპერატურა: " +
                (data["list"][32]["main"]["temp_min"] - 273.15).toFixed(1) +
                "°",
            ];
            // MAX TEMPERATURE
            const gettingMaxTemp = [
                firstMaxTemp,
                secondMaxTemp,
                thirdMaxTemp,
                fourthMaxTemp,
                fifthMaxTemp,
            ];
            let j = 0;

            for (let i = 0; i < 33; i += 8) {
                gettingMaxTemp[j].innerHTML =
                    "მაქს. ტემპერატურა: " +
                    (data["list"][i]["main"]["temp_max"] - 273.15).toFixed(1) +
                    "°";
                j++;
            }

            // "მაქს. ტემპერატურა: " +
            // (data["list"][8]["main"]["temp_max"] - 273.15).toFixed(1) +
            // "°",
            // "მაქს. ტემპერატურა: " +
            // (data["list"][16]["main"]["temp_max"] - 273.15).toFixed(1) +
            // "°",
            // "მაქს. ტემპერატურა: " +
            // (data["list"][24]["main"]["temp_max"] - 273.15).toFixed(1) +
            // "°",
            // "მაქს. ტემპერატურა: " +
            // (data["list"][32]["main"]["temp_max"] - 273.15).toFixed(1) +
            // "°",

            // const
            //             //Making Borders
            //             name.style.border = "0.1px solid #33C7FF";
            //             desc.style.border = "0.1px solid #33C7FF";
            //             temp.style.border = "0.1px solid #33C7FF";
            //             //Getting Data From API
            //             console.log(data);
            //             tempValue = data["main"]["temp"];
            //             nameValue = data["name"];
            //             descValue = data["weather"][0]["description"];
            //             //Display Data
            //             name.innerHTML = "ქალაქი/ქვეყანა: " + nameValue;
            //             desc.innerHTML = "ღრუბლიანობა:   " + descValue;
            //             temp.innerHTML = "ტემპერატურა: " + tempValue + "°";
            //         })
            //         //Catching Error
            //         .catch((err) => alert("Error #404 -> Wrong City"));
            //add styling
            let weatherDivs = document.querySelectorAll(".weather-div");
            for (let i = 0; i < weatherDivs.length; i++) {
                weatherDivs[i].className = "border";
            }
        })
        .catch((err) => alert("Error #404 -> Wrong City"));
});