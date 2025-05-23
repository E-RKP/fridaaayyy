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
