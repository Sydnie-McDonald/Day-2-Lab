/* eslint-disable no-console */
// import functions
import { people } from './data.js'; 
console.log(people, 'people');
// grab DOM elements
const selectEl = document.querySelector('.select');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const hobbiesEl = document.querySelector('.hobbies');
const containerEl = document.querySelector('.contain');
console.log(selectEl, nameEl, ageEl, bioEl, hobbiesEl, containerEl);




// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state