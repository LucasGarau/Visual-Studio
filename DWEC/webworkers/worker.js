//El worker no tiene aceso ni al dom ni al windows
let resultat = 0;

        for (let i = 0; i < 100000000; i++) {
            resultat += i;
            
        }

postMessage(resultat);