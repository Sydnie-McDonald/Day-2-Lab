/* eslint-disable no-console */
// import functions
import { people } from './data.js';
//console.log(people, 'people');
// grab DOM elements
const selectEl = document.querySelector('.select');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const hobbiesEl = document.querySelector('.hobbies');
const containerEl = document.querySelector('.contain');
//console.log(selectEl, nameEl, ageEl, bioEl, hobbiesEl, containerEl);


function renderPerson(index) {
    containerEl.classList.add(`${people[index].name}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    ageEl.textContent = 'Age: ' + people[index].age;
    bioEl.textContent = 'Bio: ' + people[index].bio;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}

// set event listeners
selectEl.addEventListener('change', (e) => {
    console.log('user click');
    const selected = e.target.value;
    hobbiesEl.innerHTML = ' ';
    if (selected === 'one') {
        renderPerson(0);
        document.body.style.backgroundColor = '#c453f5';
    } else if (selected === 'two') {
        renderPerson(1);
        document.body.style.backgroundColor = '#fa25cf';
    } else if (selected === 'three') {
        renderPerson(2);
        document.body.style.backgroundColor = '#28baeb';
    } else {
        renderPerson(3);
        document.body.style.backgroundColor = '#63e686';
    }
});