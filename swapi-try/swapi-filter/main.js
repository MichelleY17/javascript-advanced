import { fetchAllPeople, fetchAllFilms } from "./modules/api.js";
import { renderList, renderCard } from "./modules/render.js";
import { filterList } from './modules/utils.js';

// fetch dei film e composizione delle <option> della <select>
const films = await fetchAllFilms();
const filmSelect = document.getElementById('filmSelect');
// filmSelect.addEventListener('change',function(event){
  
// })

/*   for (const f of films){
    const opt = document.createElement('option');
    opt.value = f.episode_number;
    opt.textContent = f.title;
    filmSelect.appendChild(opt); 
  } */
films.forEach(f => {
  
  const opt = document.createElement('option');
  opt.value = f.episode_number;
  opt.textContent = f.title;

  filmSelect.appendChild(opt);
  // per appendChild(dom nod)(segnala errore aiuta a debuggare) e append(no dom nod) sono diverse append funziona come push
});



let people = await fetchAllPeople();
// fetch dei personaggi e composizione della lista nell'<aside>


const peopleWithHtml = [];

for (const person of people) {
  const listItem = document.createElement('a')
  listItem.className = "list-group-item list-group-item-action";
  listItem.textContent = person.name;

  const personWithHtml = { ...person, html: listItem };

  // gestione del click su un elemento dell'<aside>
  listItem.addEventListener('click', (event) => {
    // gestione della classe .active 
    const list = event.target.parentElement;
    list.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');

 
    renderCard(personWithHtml);
       // render!
  });

  peopleWithHtml.push(personWithHtml)
}


let filmFilter = '';
let nameFilter = '';
let filteredList = peopleWithHtml;
// set degli ascoltatori su <input> e <select> rispettivamente


filmSelect.addEventListener('change', function(event) {
  filmFilter = event.target.value;
  const filteredList = peopleWithHtml.filter(p=>p.films.map(film[film.length -2]).includes(filmFilter));
  console.log(filteredList)
  renderList(filteredList.map(({ html }) => html));
})

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keyup', (e) => {
  nameFilter = e.target.value.toLowerCase();
  const filteredList = peopleWithHtml.filter(p=>p.name.toLowerCase().includes(nameFilter));
  renderList(filteredList.map(f => f.html))
});

renderList(peopleWithHtml.map(({ html }) => html));

