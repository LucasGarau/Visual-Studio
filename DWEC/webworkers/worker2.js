
   (async function(){
    const fetchAeroports = await fetch("https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json")
    const aeroports = await fetchAeroports.json();
    postMessage(aeroports);
   })()
   


