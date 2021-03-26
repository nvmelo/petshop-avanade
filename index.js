var moment = require('moment');
var pets = require("./db-pets.json");

const nomePetshop = 'PETSHOP AVANADE';



const listarPets = () => {
    for(let pet of pets){
        console.log(`--> ${pet.nome}:\n\tIdade: ${pet.idade}\n\tTipo: ${pet.tipo}\n\tRaca: ${pet.raca}\n`);
    }
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
    petsVacinados = pets.filter(pets => pets.vacinado === false);
    for(let pet of pets)
        vacinarPets(pet);
    console.log(`\nPets vacinados na campanha: ${petsVacinados.length}.`);
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
}

insereCliente("tob", "cachorro", 3, "vira-lata", 5, "diego", "(81) 99902-4433", false, []);
// console.log(pets[pets.length-1]);

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
    servico(pet);
}

atenderCliente(pets[0], darBanhoPet);

console.log("\n");
for (const pet of pets) {
    console.log(pet);
}
