(()=>{"use strict";const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"],n=document.getElementById("line-two"),t=document.getElementById("line-one"),o=document.getElementById("one"),c=document.getElementById("two"),l=document.getElementById("three");async function r(e){const r=`https://api.weatherapi.com/v1/current.json?key=869031f710664068915153856231407&q=${e}&aqi=no`,i=document.getElementById("input");fetch(r,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e),t.innerHTML=e.current.condition.text,n.innerHTML=e.location.name+", "+e.location.country,o.innerHTML="Feels Like: "+e.current.feelslike_c,c.innerHTML="Wind: "+e.current.wind_kph+" Km/h",l.innerHTML="Humidity: "+e.current.humidity+"%",console.log("Location: "+e.location.country),console.log("Weather Deg: "+e.current.feelslike_c),console.log("Condition: "+e.current.condition.text),console.log("City: "+e.location.name),console.log("Wind MPH: "+e.current.wind_mph)})).catch((function(e){return console.log("error"+e),alert("Please input a valid city!"),i.value="",e}))}console.log(function(){const n=new Date;let t=n.getDate(),o=e[n.getMonth()];return n.getFullYear(),t+" "+o}()),console.log(function(){const e=new Date;let n=e.getHours(),t=e.getMinutes();return t<10&&(t="0"+t),n+":"+t}());const i=r("Mansoura");console.log("res"+i),console.log("getTemp: "+r("Mansoura,eg")),function(){const e=document.getElementById("form"),n=document.getElementById("input");e.addEventListener("submit",(e=>{e.preventDefault(),r(n.value)}))}()})();