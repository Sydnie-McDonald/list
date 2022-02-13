export function renderDogCard(dog) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('dog-card');

    p.textContent = dog.name;
    img.src = `./assets/${dog.type}.jpg`;
    a.href = `/lists/?id=${dog.id}`; // link to the dog's detail page here

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderDog(dog) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const weightEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const colorAndweightEl = document.createElement('div');

    div.classList.add('dog-detail-container');
    // create anchor tag
    const a = document.createElement('a');
    a.href = `./lists/?id=${dog.id}`;

    img.src = `./assets/${dog.type}.jpg`;

    nameEl.textContent = dog.name;
    nameEl.classList.add('name');

    breedEl.textContent = dog.breed;
    breedEl.classList.add('breed');

    weightEl.textContent = dog.weight;
    weightEl.classList.add('weight');

    colorEl.textContent = dog.color;
    colorEl.classList.add('color');

    colorAndweightEl.classList.add('color-and-weight');

    colorAndweightEl.append(colorEl, weightEl);


    a.append(img, nameEl, breedEl, colorAndweightEl);
    div.append(a);
    return div;
}
