function serca(data){
    const response = await fetch('http://server247.cfgs.esliceu.net/exercicis/nasa?'+data);
    const meteorits = await response.json();
    var asteroid = JSON.parse(meteorits); 
    var meteoritosobj=[];
   for (let i = 0; i < asteroid.length; i++) {
       meteoritosobj.push(asteroid[i])
       
   }
    
    return meteoritsobj;

}