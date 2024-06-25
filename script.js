let Data=null
let weather={
    "apiKey":"550b78b75106bccc657778e7522e716c",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey)
        .then((response)=>response.json())
        .then((data)=>{this.displayWeather(data)})
        .catch((error)=>{
            this.displayError(error.message);
        });
        
    },
    displayWeather:function(data){
        const {name}=data;
        const {description,icon}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,description,icon,temp,humidity,speed);
        // console.log(document.querySelector(".city"))
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.querySelector(".weather").classList.remove("notfound");

    },
    displayError: function (message) {
        document.querySelector(".city").innerText = "City not found. Try again... ";
        document.querySelector(".temp").innerText = "";
        document.querySelector(".icon").src = "";
        document.querySelector(".description").innerText = "";
        document.querySelector(".humidity").innerText = "";
        document.querySelector(".wind").innerText = "";
        

    }
  
}
const search=()=>{
    weather.fetchWeather(document.querySelector(".search-bar").value)
    console.log("Searched")
}
// weather.fetchWeather("Denver")
document.querySelector(".search-button").addEventListener("click",search)
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    console.log("enter")
    if(event.key=="Enter"){
        search()
    }
})
weather.fetchWeather("Kathmandu")