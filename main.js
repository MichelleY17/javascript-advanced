// fetch di tutte le navi da swapi
// display nella lista
// -name
// -model
// -film(lista)
// Specify the API endpoint for user data
const apiUrl = 'https://swapi.dev/api/starships';

// qui si fa le richiesta GET dall'API portata ,poi essa sara visibile nella console.
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
     console.error("API call error");
    }
    return response.json();
  })
  .then((data) => {
    let list = document.getElementById("list");
    data.results.forEach((item) => {
        
        let li = document.createElement("li");
        li.innerText = `name: ${item.name} | model: ${item.model}`
        list.appendChild(li);
        // const displayList= starships.map({item=>})
    })
    console.log("funzaaaaa!!")
});




