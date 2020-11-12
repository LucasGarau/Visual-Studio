import { Animal } from '../model/Animal.js'

//Retorna tots els ANIMALS (Animal.js)
export async function getAnimals() {
    const response = await fetch('http://server247.cfgs.esliceu.net/vetplus/getAnimals');
    const animals = await response.json();
    return animals;
}

export async function getAnimal(idAnimal2) {
    getAnimals().then(animals => {
        for (let i = 0; i < animals.length; i++) { 
            if (animals[i].idanimal=== idAnimal2) { 
                document.querySelector("input[name='nom']").value = animals[i].nom;
                document.querySelector("input[name='numreg']").value = animals[i].numregistre;
                document.querySelector("input[name='sexe'][value='"+animals[i].sexe+"']").checked=true;
                return animals[i];
            }
        }
        })
    };
    
    /*
    getAnimals().then(animals => {
        const animals2 = animals;
        console.log(animals2);
        console.log("getAnimal", idAnimal2);
        return animals2.find((an) => {
            console.log("Find", an.idAnimal, idAnimal2)
            return an.idAnimal === idAnimal2
        })
});*/


/*

    for (let i = 0; i < animals.length; i++) { 
        if (animals[i].id === idAnimal) { 
            return animals[i];
        }
    }

   
    /*
    console.log("getAnimal", idAnimal);
    return animals.find((an) => {
        console.log("Find", an.id, idAnimal)
        return an.id === idAnimal
    })
    */

