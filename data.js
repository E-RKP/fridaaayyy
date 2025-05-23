let person = {
  name: 'Luca',
  età: 28,
  professione: 'baker'
}

console.log(person.name)
console.log(person['name'])
console.log(person.professione)
console.log(person)

person.professione = 'Designer'
person.hobby = 'calcio'

function creaLibro (titolos, autores,annos){

  let libro = {
    titolo: titolos,
    autore: autores,
    anno: annos,

  }
  return libro;
}

console.log(creaLibro('Cronaca di una morte annunciata', 'Garcia Marquez', 1984))

const studente = {
  nome: "Sara",
  età: 22,
  indirizzo: {
    città: "Milano",
    cap: "20100"
  }
};

// Stampa la città dello studente

console.log(studente.indirizzo.città)

const auto = {
  marca: "Fiat",
  modello: "Panda",
  anno: 2020
};

// Stampa tutte le chiavi e i valori dell’oggetto auto

nkeysauto = Object.keys(auto)
nvalueauto = Object.values(auto)

for (i=0; i<nkeysauto.length;i++){

  console.log (nkeysauto)
  console.log(auto[nkeysauto[i]])
}

const libri = [
  { titolo: "1984", autore: "Orwell" },
  { titolo: "Il Signore degli Anelli", autore: "Tolkien" },
  { titolo: "Il Piccolo Principe", autore: "Saint-Exupéry" }
];


for (i=0; i<libri.length;i++){
  console.log(libri[i].titolo)
}

for (i=0; i<libri.length;i++){
  if (libri[i].titolo === '1984'){
    console.log(libri[i].autore)
  }
}


const cane = {
  nome: "Fido",
  razza: "Labrador",
  abbaia: function () {
    console.log("Bau!");
  }
};

cane.abbaia();

const persona = {
  nome: "Anna",
  età: 28,
  città: "Roma"
};

let nperso = Object.keys(persona)
console.log(nperso.length)

const originale = {
  nome: "Luca",
  hobby: ["calcio", "lettura"],
  indirizzo: {
    città: "Milano"
  }
};

function deepcopy(oggetto){

  let copy = Object.assign(oggetto)
  return copy;

}

console.log(deepcopy(originale))

const arr = [["nome", "Maria"], ["età", 32], ["città", "Napoli"]];

function returnArr (array){

  let nuovo = Object.fromEntries(array)
  return nuovo;
}

console.log(returnArr(arr))

const dati = {
  a: 5,
  b: "test",
  c: 12,
  d: null,
  e: 3
};

function somma (oggetto){

  let sommaz = 0
  let ndati = Object.values(dati)
  for (i=0; i<ndati.length;i++){
    if (typeof ndati[i] === typeof 1){
      sommaz = sommaz+ndati[i]
      
    }
  }
  return sommaz;
}

console.log(somma(dati))


