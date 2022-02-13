import { dogs } from '../data.js';
import { findById } from '../utils.js';
import { renderDog } from '../render.js';
// get the id from URL
const dogDetailContainer = document.getElementById('dog-detail-container');
// on load
// use the id to fetch the dog
// render and append this dog's details to the container

for (let dog of dogs) {
    // get the id from URL
    const params = new URLSearchParams(window.location.search);
    const id = findById(params.get('id'), dogs);
    dogDetailContainer.append(renderDog(id, dog));

}
