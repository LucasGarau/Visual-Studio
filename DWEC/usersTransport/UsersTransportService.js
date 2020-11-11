function getUsers(){
    const usuarisFetch=await fetch("");
    const usuaris = await usuarisFetch.json
    const users = usuaris.filter(user =>(user.cognom1.includes("H") || user.cognom2.includes("H")))

    console.log(users);
    const resultat=[];
    for (let index = 0; index < users.length; index++) {
       resultat.push(new User(users[i].username,users[i].nom.users[i].cognom1,users[i].cognom2,null))
        
    }
    console.log("resultat: ", resultat);

    const resultatMap = users.map(user =>{
        return new User {(user.username, user.nom,user.cognom1,user.cognom2)
            
    }

    });

const resultatmap3 = users.map(u => new User (u.username, u.nom, u.cognom1, u.cognom2,null));

//map vs for each
//Diferencia 1
//map retorna una array
//for each no retorna ress

//Dieferencia 2
//map es bloquetjant
//for each no es blockejant
}
