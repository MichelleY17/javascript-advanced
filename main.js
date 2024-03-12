/*

- fetch di tutte le starship da swapi
- display nella lista
    - name
    - model
    - films (questa è una lista)

*/

async function getStarships() {
    const response = await fetch('https://swapi.dev/api/starships')
    const data = await response.json()
    return data.results
}
// async function getFilms() {
//     const response = await fetch('https://swapi.dev/api/films')
//     const data = await response.json()
//     return data.results
// }


 async function createCard(starship) {
    // const films = await getFilms();

    // const starshipFilms = starship.films.map(filmUrl => {
    //   return films.find(film => film.url === filmUrl);
    // });
    // const filmList = starshipFilms.map(film => `<li>${film.title}</li>`).join('');

    return `
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card mb-4">
          <img src="${starship.image}" class="card-img-top" alt="${starship.name}">
          <div class="card-body">
            <h5 class="card-title">${starship.name}</h5>
            <p class="card-text">Model: ${starship.model}</p>
            <p class="card-text">Film: ${starship.films}</p>
            <a href="#" class="btn btn-primary">More Info</a>
          </div>
        </div>
      </div>`;
  }
// questo pezzo di codice crea la card bootstrap,tecnicamente inserisce i dati del nome modello e fillm ,ma il pezzo del codice film non riesco a farlo funzionare
// sotto la linea 38 ci doveva essere qualcosa del tipo <ul> ${filmList}</ul> e nella linea 38 ci doveva essere qualcosa del tipo :  <p class="card-text">Film: </p>



  async function populateGrid() {
    const starships = await getStarships();
    let cardsHtml = '';
    starships.forEach((starship) => {
        cardsHtml += createCard(starship);
      });

      document.getElementById('list').innerHTML = `
        <div class="row">${cardsHtml}</div>
      `;
    }
    // questa funzione riemprela griglia con le card di bootstrap




    window.onload = populateGrid;
    // questo pezzo di codice esegue la funzione quando la pagina si carica





    /* Quando il metodi innerHTML  diventa pericoloso?
 
      Quando viene utilizzato per inserire HTML dinamico nella pagina, esponendo il sito  a attacchi di scripting malevoli  XSS (Cross-Site Scripting).
      Gli attacchi XSS si verificano quando un'applicazione web accetta input dall'utente e lo utilizza per generare HTML dinamico senza adeguata sanitizzazione. 
      Se un attaccante è in grado di inserire codice JavaScript malevolo tramite l'input dell'utente e questo codice viene  eseguito , potrebbe causare danni:
       - rubando informazioni sensibili degli utenti reindirizzando gli utenti a siti dannosi
     */