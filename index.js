const listaDePets = [];

function cadastrarPet(nome, idade, especie, tutor, ehCastrado) {
  let pet = localizadorDePet(nome);
  console.log(pet);
  if (!pet) {
    listaDePets.push({
      id: listaDePets.length + 1,
      nome,
      idade,
      especie,
      tutor,
      ehCastrado,
    });
  } else {
    console.log(`Seu pet ja é cadastrado e seu id é de ${pet.id}`);
  }
}

function localizadorDePet(nome) {
  let acheiOpet = false;
  let pet = "";
  for (let i = 0; i < listaDePets.length; i++) {
    if (listaDePets[i].nome.toLowerCase() === nome.toLowerCase()) {
      acheiOpet = true;
      pet = listaDePets[i];
    }
  }
  if (acheiOpet) {
    return pet;
  } else {
    return false;
  }
}
function animalNcadastrado() {
  console.log("Animal não cadastrado");
}

function removerPet(nome) {
  let dadosAlterados = false;
  for (let i = 0; i < listaDePets.length; i++) {
    if (listaDePets[i].nome.toLowerCase() === nome.toLowerCase()) {
      listaDePets.splice(i, 1);
      dadosAlterados = true;
    }
  }
  if (dadosAlterados) {
    for (let i = 0; i < listaDePets.length; i++) {
      listaDePets[i].id = i + 1;
    }
  } else {
    animalNcadastrado();
  }
}

function verficaFaixaEtaria(nome) {
  let pet = localizadorDePet(nome);
  if (pet) {
    if (pet.idade >= 0 && pet.idade < 2) {
      console.log("Filhote");
    } else if (pet.idade <= 6) {
      console.log("Adulto");
    } else {
      console.log("Idoso");
    }
  } else animalNcadastrado();
}

function ehCastrado(nome) {
  let pet = localizadorDePet(nome);
  if (pet) {
    if (pet.ehCastrado) {
      console.log("Ja é castrado");
    } else {
      console.log("Não é castrado, Marque sua castracao");
    }
  } else animalNcadastrado();
}

function listaDeTodosPetsCadastrados(bancoDeDadosEmArray) {
  for (let pet of bancoDeDadosEmArray) {
    console.log("---------------------------------");
    console.log("Nome do(a) tutor(a): ", pet.tutor);
    console.log("Nome do pet: ", pet.nome);
    console.log("Idade do pet: ", pet.idade);
    console.log("Espécie do pet: ", pet.especie);
    console.log("É castrado? ", pet.ehCastrado);
    console.log("---------------------------------");
  }
}

cadastrarPet("Chiclete", 4, "Gato", "Luiza", true);
cadastrarPet("Blanca", 1, "Gato", "Luiza", false);
cadastrarPet("Kiara", 6, "Cachorro", "Isa", false);
cadastrarPet("Bernadette", 4, "Cachorro", "Isa", false);
removerPet("Kiara");
console.log(listaDePets);
removerPet("teste");
cadastrarPet("Chiclete", 4, "Gato", "Luiza", true);
console.log(listaDePets);
cadastrarPet("Chiclete", 4, "Gato", "Luiza", true);
verficaFaixaEtaria("chiclete");
ehCastrado("blanca");
listaDeTodosPetsCadastrados(listaDePets);
