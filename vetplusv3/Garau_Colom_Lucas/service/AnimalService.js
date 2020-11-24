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
      //          document.querySelector("input[name='rasa']").value = animals[i].tipus;
             


                return animals[i];
            }
        }
        })
    };

export function hiddeoptions(){
    $('select[name=rasa]').change(function () {
        $('.cavall').hide();
        
    $("select[name=mem_type] option:selected").each(function () {
        var value = $(this).val();
        if(value="ca") {
            $('.perro1').show();
            $('.cavall1').hide();
        } else if(value == "cavall") {
            $('.cavall1').show();
            $('.perro1').hide();
        } else if(value == "moix") {
            $('.perro1').hide();
            $('.cavall1').hide();
           
        }

    });
}); 
}

export function save(){
    console.log("click");
    let nom = document.getElementById("nom").value;
    let numreg = document.getElementById("numreg").value;
    let sexe;
    if (document.querySelector("input[name='sexe'][value='MASC]")) {
       sexe = "MASC";
  } else {
       sexe = "FEM";
    }
   let tipus = document.getElementById("tipus").value;
    let a = new Animal(null,nom,sexe,numreg,tipus);

    const xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange= function(){
        if(this.readyState===4){
            console.log(this.responseText)
        }else{
            console.log("Ara esta a l'estat ", this.readyState);
        }
    }
    xmlhttp2.open("POST","http://server247.cfgs.esliceu.net/vetplus/save");
    xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(a);
    xmlhttp2.send(a);
}
    
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

