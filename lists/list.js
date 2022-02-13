import { dogs } from '../data.js';
import { findById } from '../utils.js';
import { renderDog } from '../render.js';

const dogDetailContainer = document.getElementById('dog-detail-container');
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
window.addEventListener('load', async () => {
    //search data
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const dog = await dogs(id);
    console.log(id, dog);
    dogDetailContainer.append(renderDog(dog));

});
