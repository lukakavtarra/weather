let button = document.querySelector("#button");
let inputValue = document.querySelector(".inputValue");
let name = document.getElementById("name");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");

button.addEventListener("click", function() {
    //Fetching Data
    fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            inputValue.value +
            "&appid=12815cdc6b60677ea338e0d4b0de04be"
        )
        .then((response) => response.json())
        .then((data) => {
            //Making Borders
            name.style.border = "0.1px solid #33C7FF";
            desc.style.border = "0.1px solid #33C7FF";
            temp.style.border = "0.1px solid #33C7FF";
            //Getting Data From API
            console.log(data);
            tempValue = data["main"]["temp"];
            nameValue = data["name"];
            descValue = data["weather"][0]["description"];
            //Display Data
            name.innerHTML = "ქალაქი/ქვეყანა: " + nameValue;
            desc.innerHTML = "ღრუბლიანობა:   " + descValue;
            temp.innerHTML = "ტემპერატურა: " + tempValue + "°";
        })
        //Catching Error
        .catch((err) => alert("Error #404 -> Wrong City"));
});