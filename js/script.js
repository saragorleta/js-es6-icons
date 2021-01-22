Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti.
Prendete i colori da un altro array.
Stampare poi tutte le icone utilizzando il template literal.
Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.


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

// ****Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti.
// Prendete i colori da un altro array.***

//preparo i colori
const blue = '#1e5bb3';
const orange = '#d99419';
const violet = '#4b2675';
// li inserisco nell'array
const colore=[blue, orange, violet];
//con map associo i colori ad ogni categoria
const newIcons = icons.map((element) => {
  return {
    ...element,
    colore: {
      color: (element.type == 'animal') ? blue,
      color:(element.type== 'vegetable') ? orange : violet
    }
  }
});

console.log(newIcons);

//***Stampare poi tutte le icone utilizzando il template literal.***

icon.forEach((element) => {
  const {name, prefix,type,family,colore} = element;
  document.getElementById('nuove-icone').innerHTML += `
  <div>
    style="color:${ribbon.color}; filter:opacity(${ribbon.opacity}%)"></i>
    Nome: ${name} - Prefix: ${Prefix} - tipo: ${type} - famiglia: ${family} - colore: ${color}
  </div>
  `;
});
