const moment = require('moment');
const fs = require('fs');
//Lê de forma sincrona o arquivo JSON através do modulo fs e converte em JS object
const db_pets = JSON.parse(fs.readFileSync('./db-pets.json'));
//Acessa o array de pets
const pets = db_pets.pets;

const nomePetshop = 'PETSHOP AVANADE';

// Atenção na hora de chamar essa funcao! O parâmetro passado deve ser 'db_pets' para
// garantir a sobrescrita completa do JSON. Caso passe o parâmetro 'pets', o JSON
// será sobrescrito pelo array de pets
const WriteJson = (pets) => {
    // Converte o JS object atualizado em JSON e sobrescreve o db-pets.json de forma sincrona
    // Os dois últimos parâmetros garantem a identação correta do JSON
    var _pets = JSON.stringify(pets, null, 2); 
    fs.writeFileSync('db-pets.json', _pets, 'utf-8');
}

const listarPets = () => {
    pets.forEach(pet => {
    const {nome, idade, tipo, raca, vacinado} = pet;
        console.log(`\n--> ${nome}:\n\tIdade: ${idade}\n\tTipo: ${tipo}\n\tRaca: ${raca}`);
        console.log("\tStatus: " + (vacinado ? "Vacinado" : "Nao vacinado"));
    });
}
// listarPets();

const vacinarPets = (pet) => {
    let {nome, vacinado} = pet;
    if (!vacinado) {
        vacinado = true;
        console.log(`* ${nome} foi vacinado.`);
    } else {
        console.log(`${nome} já estava vacinado.`)
    }
}

const campanhaVacina = (pets) => {
    const petsVacinados = pets.filter(pets => pets.vacinado === false);
    petsVacinados.map(pet => vacinarPets(pet));
    console.log(`\nPets vacinados na campanha: ${petsVacinados.length}.`);
    WriteJson(db_pets);
}
// campanhaVacina(pets);

const inserePets = (newPet) => {
    pets.push(...newPet);
    WriteJson(db_pets);
}
//  inserePets(
//     [
//         {
//             "nome": "tob",
//             "tipo": "cachorro",
//             "idade": 3,
//             "raca": "vira-lata",
//             "peso": 5,
//             "tutor": "diego",
//             "contato": "(81) 99902-4433)",
//             "vacinado": false,
//             "servicos": [],
//         },
//         {
//             "nome": "miau",
//             "tipo": "gato",
//             "idade": 3,
//             "raca": "dourado",
//             "peso": 5,
//             "tutor": "diego",
//             "contato": "(81) 99911-4653)",
//             "vacinado": false,
//             "servicos": [],
//         }
//     ]
//  );

const darBanhoPet = (pet) => {
    const {nome, servicos} = pet;
    servicos.push({
        servico: "banho",
        data: moment().format("L - LTS")
    });
    console.log(`${nome} está de banho tomado!`);
}

const tosarPet = (pet) => {
    const {nome, servicos} = pet;
    servicos.push({
        servico: "tosa",
        data: moment().format("L - LTS")
    });
    console.log(`${nome} está com cabelinho na regua!`);
}

const apararUnhasPet = (pet) => {
    const {nome, servicos} = pet;
        servicos.push({
            servico: "unha",
            data: moment().format("L - LTS")
        });
        console.log(`${nome} está de unhas aparadas!`);
}

const atenderCliente = (pet, servico) => {
    const {nome} = pet;
    console.log("\nBem vindo, " + nome + "!");
    servico(pet);
    WriteJson(db_pets);
    console.log("Até logo, " + nome + "!");
}
// atenderCliente(pets[1], darBanhoPet);

const buscarPet = (nome) => {
    return pets.find(pet => pet.nome === nome);
}
// console.log(buscarPet("Caninha"));

const filtrarTipoPet = (tipo) => {
    return pets.filter(pets => pets.tipo === tipo);
}
// console.log(filtrarTipoPet("cachorro"));

const clientePremium = (pet) => {
    const {servicos} = pet;
    console.log((servicos.length < 10) ? "Cliente nao elegivel" : "** CLIENTE PREMIUM: Elegivel para desconto.");
}
// clientePremium(pets[0]);