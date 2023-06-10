let lat;
let long;
const API_KEY = "1c18bdc3e52a15f56b3af6951038e572";
document.getElementById("fetch").addEventListener("click",()=>{
    // getting let and long
    if (navigator.geolocation) {

        let page = document.querySelector(".landing-page");
        page.style.display="none";

        navigator.geolocation.getCurrentPosition((position)=>{
            lat = position.coords.latitude;
            long = position.coords.latitude;

            console.log(lat,long);

            // fetching data
            document.getElementById("fetching-data").innerHTML += `
               <h1>Weather Api</h1>
               <iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="460" height="270" frameborder="0" style="border:0"></iframe>`
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
                ).then((response)=>{
                    return response.json()
                }).then((data)=>{
                    console.log(data);
                    document.getElementById("fetching-data").innerHTML += `<br/><br/>
                    <div id="data">
                    <h1>Weather Data</h1>
                    <div>
                    <p>location : ${data.name}</p>
                    <p>Lat:${lat},Long:${long}</p>
                    <p>timezone: ${data.timezone}</p>
                    <p>windspeed: ${data.wind.speed}</p>
                    <p>humidity: ${data.main.humidity}</p>
                    <p>wind direction(in deg): ${data.wind.deg}</p>
                    <p>feels like: ${data.main.feels_like}</p>
                    <p>uv index:</p>
                    </div>
                    </div>
                    `;
                })
        },(error)=>{
            alert(error);
        });
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
})
