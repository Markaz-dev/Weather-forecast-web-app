"use strict";
$(document).ready(function () {
    // https://api.openweathermap.org/data/2.5/weather?q=${$("myWeather").val()}&appid={API key}
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
            async function weather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#humidity").html(data.main.humidity)
                $("#maxtemp").html(data.main.temp_max)
                $("#mintemp").html(data.main.temp_min)
                $("#myWeather").val("")
                console.log(data)
            }
            weather()
        }
    })

    $("#btn").click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
        async function weather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name)
            $("#humidity").html(data.main.humidity)
            $("#maxtemp").html(data.main.temp_max)
            $("#mintemp").html(data.main.temp_min)
            $("#myWeather").val("")
            console.log(data)
        }
        weather()
    });


});