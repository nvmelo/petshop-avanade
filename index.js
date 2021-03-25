const nomePetshop = 'PETSHOP AVANADE';

let pets = [
    {
        nome: 'Costelinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug',
        contato: '(11) 98899-4545',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Rex',
        tipo: 'papagaio',
        idade: 46,
        raca: 'Imperador',
        peso: 1,
        tutor: 'Jose',
        contato: '(11) 98569-4145',
        vacinado: false,
        servicos: ['banho']
    },
    {
        nome: 'Caninha',
        tipo: 'cachorro',
        idade: 3,
        raca: 'Vira-lata',
        peso: 5,
        tutor: 'Denis',
        contato: '(11) 97199-4215',
        vacinado: false,
        servicos: ['banho']
    }
];

// const listarPets = () => {
//     for(let pet of pets){
//         console.log(`--> ${pet.nome}:\n\tIdade: ${pet.idade}\n\tTipo: ${pet.tipo}\n\tRaca: ${pet.raca}\n`);
//     }
// }

// listarPets();

const vacinarPets = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado.`);
    } else {
        console.log(`${pet.nome} já estava vacinado.`)
    }
}

const campanhaVacina = (pets) => {
    var pets_vacinados = 0;
    for(let pet of pets) {
        if (!pet.vacinado)   pets_vacinados++;
        vacinarPets(pet);
    }

    console.log(`Pets vacinados na campanha: ${pets_vacinados}.`);
}

campanhaVacina(pets);