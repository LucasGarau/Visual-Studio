
   (async function(){
      setInterval(async function(){
         const fetchAeroports = await fetch("http://server247.cfgs.esliceu.net/exercicis/sporttracker/anims")
         const aeroports = await fetchAeroports.json();
         postMessage(aeroports);
       }, 10000);
    
   })()
   


