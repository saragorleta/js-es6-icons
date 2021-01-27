// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti.
// Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.
// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
// Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.


const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];

  // -OBIETTIVO:CREARE DUE ARRAY UNO PER COLORE E L'ALTRO PER TYPE
  //creiamo un array con i tre colori che poi si dovranno associare ad:
   // animal vegetables e user
const colore=[blue, orange, violet];

// Per arrivare ad ottenere questo array [animal, vegetables, user]
// cicliamo sull'array di partenza (icons):
//   const tipologie=[];
//   icons.forEach((element) => {
//     if(!tipologie.includes(element.type)){ //se non lo include(type)
//     tipologie.push(element.type); //allora aggiungiamo l'elemento typle all'interno dell'array vuoto 'tipologie'
//     }
//   });
  // console.log(tipologie);
//cosi otteniamo: array['animal''vegetable''user']   <--

// possiamo trasformare in una funzione (da riga 115 a 120)
function getTypes(array){
  const tipologie=[];
  icons.forEach((element) => {
    if(!tipologie.includes(element.type)){
    tipologie.push(element.type);
    }
  });
  return tipologie; //restituisce l'array filtrato ['animal''vegetable''user']
}
//RICHIAMO lLA FUNZIONE GetTypes
// creando una nuova const "newArrayTypes" che,
// equivale al nuovo array['animal''vegetable''user']
// (per comodità lo mettiamo in una const).
const newArrayTypes=getTypes(icons);
console.log(newArrayTypes);

// mappiamo l'array newArrayTypes per conoscere la sua
// posizione, il suo indice per poi aggiungere il colore
// e creiamo una nuova const iconsColor
const iconsColor=icons.map(element) => {
  // con l'indexOf lui mi va a vedere quale indice(posizione) ha l'elemento type
  //sul newArrayTypes
  indexTypes=newArrayTypes.indexOf(element.type);
  console.log(indexTypes);
});
return {
  ...element,  //mi devi restituire tutti gli elementi(CON INDICE CALCOLATO)
  color: colors[indexTypes]; //e associargli il colore in base all'indice
}
console.log(iconsColor);// otteniamo così i colori associati al tipo

// STAMPIAMO LE ICONE CON I COLORI:
// 1) creiamo la funzione:
function printIcons(element, container){
  array.forEach((element) => {
    const {name, family, prefix, type, color}=element;//abbiamo destrutturato

  container.append(`
    <div class="icon">
      <i class="${family} ${prefix} ${name} ${type} ${color}"></i>
      <div class="title">"${name.toUpperCase()}"</div>
    </div>`
  )
  });
}
// 2)richiamiamo la funzione:
const contenitoreIcone = $('.icons'){ //.icons è il nome classe in html
  printIcons (iconsColor, container);
});

// STAMPIAMO IL FILTRO:
// 1)creiamo la funzione:
function printFilter(array, select){
  array.forEach((element) => { //con array consideriamo quello
                              //che abbiamo creato prima newArrayTypes

    select.append(`
      <option value="${element}"">${element}</option>
    `)
    //<option value="${element}">All</option> element è riferito agli elementi
    //contenuti nell'array newArrayTypes(animal vegetables user)
  });
}
// 2)richiamo la funzione:
const seleziona = $('#types'){
  printFilter(newArrayTypes,select);
});
    // ma avremmo potuto scrivere anche cosi:
    // cicliamo su array newArrayTypes
newArrayTypes.forEach((element) => {
//selezioniamo #types e aggiungiamo
  $('#types').append(`
  element(=all), animal , vegetables user
    <option value="${element}"">${animal}${vegetables}${user}</option>
    `
  )
});

seleziona.change(function(){
  const selezionato=$(this).val();
});
