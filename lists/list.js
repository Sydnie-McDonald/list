import { dogs } from '../data.js';
import { findById } from '../utils.js';
import { renderDog } from '../render.js';
// get the id from URL
const params = new URLSearchParams(window.location.search);
const dog = findById(params.get('id'), dogs);
const dogDetailContainer = document.getElementById('dog-detail-container');
// on load
// use the id to fetch the dog
// render and append this dog's details to the container
dogDetailContainer.append(renderDog(dog));
