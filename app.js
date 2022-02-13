// import functions and grab DOM elements
import { dogs } from './data.js';
import { renderDogCard } from './render.js';

const dogListContainer = document.getElementById('dog-list-container');

// let state
for (let dog of dogs) {
    const dogDiv = renderDogCard(dog);
    dogListContainer.append(dogDiv);
}