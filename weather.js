const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';

const searchBox=document.querySelector('.search input')
const searchBtn=document.querySelector('.search button')

searchBtn.addEventListener('click',()=>{
    weatherCheck(searchBox.value)
})

async function weatherCheck(city){
const options = {
    method: 'GET',
    params: {city: 'Seattle'},
    headers: {
      'X-RapidAPI-Key': '2497dedae6mshc4da20c3a74ebbcp148c7ajsn1a341634da96',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
await fetch(url+`${city}`,options)
.then(res => res.json())
.then(res=>{
    console.log(res)
    document.querySelector('.temp').innerHTML=res.temp+'°C'
    document.querySelector('.humidity').innerHTML=res.humidity+'%'
    document.querySelector('.wind').innerHTML=res.wind_speed+'Km/hr'
    document.querySelector('.city').innerHTML=city
})
.catch(err => console.log(err))
}
