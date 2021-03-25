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
        vacinado: true,
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
        vacinado: true,
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
        vacinado: true,
        servicos: ['banho']
    }
];

const listarPets = () => {
    for(let pet of pets){
        console.log(`--> ${pet.nome}:\n\tIdade: ${pet.idade}\n\tTipo: ${pet.tipo}\n\tRaca: ${pet.raca}\n`);
    }
}

listarPets();