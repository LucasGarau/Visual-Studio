import { Animal } from '../model/Animal.js'

//Retorna tots els ANIMALS (Animal.js)
export async function getAnimals() {
  /*
    const animal1 = new Animal(1, 'Boby', "MASC", null, "CA");
    const animal2 = new Animal(2, 'Llamp', "MASC", 334, "MOIX");
    const animal3 = new Animal(3, 'Mixy', "FEM", 23423, "CA");
    const animal4 = new Animal(4, 'Dorado', "MASC", null, "CAVALL");
    const animal5 = new Animal(5, 'Truia', "FEM", null, "MOIX");
    const animal6 = new Animal(6, 'Eiba', "FEM", 43434, "BOU");
    const animal7 = new Animal(7, 'Ras', "MASC", 6455, "CA");
   // http://server247.cfgs.esliceu.net/vetplus/getAnimals
  */


 fetch= await("http://server247.cfgs.esliceu.net/vetplus/getAnimals")
 .then((r) => r.json())
 .then((resposta)=>{
    return resposta;

 });

 
 
}



export function getAnimal(idAnimal) {
    const animals = getAnimals();

    /*for (let i = 0; i < animals.length; i++) { 
        if (animals[i].id === idAnimal) { 
            return animals[i];
        }
    }

    return null;*/
    console.log("getAnimal", idAnimal);
    return animals.find((an) => {
        console.log("Find", an.id, idAnimal)
        return an.id === idAnimal
    })
}