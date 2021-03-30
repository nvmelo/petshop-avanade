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
        console.log(`\n--> ${pet.nome}:\n\tIdade: ${pet.idade}\n\tTipo: ${pet.tipo}\n\tRaca: ${pet.raca}`);
        console.log("\tStatus: " + (pet.vacinado ? "Vacinado" : "Nao vacinado"));
    });
}
// listarPets();

const vacinarPets = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`* ${pet.nome} foi vacinado.`);
    } else {
        console.log(`${pet.nome} já estava vacinado.`)
    }
}

const campanhaVacina = (pets) => {
    const petsVacinados = pets.filter(pets => pets.vacinado === false);
    petsVacinados.map(pet => vacinarPets(pet));
    console.log(`\nPets vacinados na campanha: ${petsVacinados.length}.`);
    WriteJson(db_pets);
}
// campanhaVacina(pets);

const insereCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    newPet = {
        nome, 
        tipo, 
        idade, 
        raca, 
        peso, 
        tutor, 
        contato, 
        vacinado, 
        servicos
    }
    pets.push(newPet);
    WriteJson(db_pets);
}
//  insereCliente("tob", "cachorro", 3, "vira-lata", 5, "diego", "(81) 99902-4433", false, []);

const darBanhoPet = (pet) => {
    pet.servicos.push({
        servico: "banho",
        data: moment().format("L - LTS")
    });
    console.log(`${pet.nome} está de banho tomado!`);
}

const tosarPet = (pet) => {
    pet.servicos.push({
        servico: "tosa",
        data: moment().format("L - LTS")
    });
    console.log(`${pet.nome} está com cabelinho na regua!`);
}

const apararUnhasPet = (pet) => {
        pet.servicos.push({
            servico: "unha",
            data: moment().format("L - LTS")
        });
        console.log(`${pet.nome} está de unhas aparadas!`);
}

const atenderCliente = (pet, servico) => {
    console.log("\nBem vindo, " + pet.nome + "!");
    servico(pet);
    WriteJson(db_pets);
    console.log("Até logo, " + pet.nome + "!");
}
// atenderCliente(pets[1], apararUnhasPet);

const buscarPet = (nome) => {
    return petBuscado = pets.find(pet => pet.nome === nome);
}
// console.log(buscarPet("Caninha"));

const filtrarTipoPet = (tipo) => {
    return petsDoMesmoTipo = pets.filter(pets => pets.tipo === tipo);
}
// console.log(filtrarTipoPet("cachorro"));

const clientePremium = (pet) => {
    const servicos = pet.servicos.map(x => x = 1);
    const somaServicos = servicos.reduce((sum, current) => sum + current);
    console.log((somaServicos<10) ? "Cliente nao elegivel" : "** CLIENTE PREMIUM: Elegivel para desconto.");
}
// clientePremium(pets[0]);
