//atividade map
function getAdmins(map){
    //interando em cada entrada do map, acessando a chave e o valor direto
    let admins = [];
for([key,value] of map){
    //se o valor é igual a admin, coloca no array admin 
    if(value == 'Admin'){
        admins.push(key)
    }
   
}
return admins;
}

const usuarios = new Map();//criação do map

//adicionando informações no map:
usuarios.set('Rosangela','Admin');
usuarios.set('Solange','Admin');
usuarios.set('Paulo','User');
usuarios.set('Paulinho','Admin');

console.log(getAdmins(usuarios));//retorna todos os admins
