import { fetchApi } from './js/api';

const refs = {
    formEl: document.querySelector('.search-form'),
    galegyEl: document.querySelector('.gallery'),
};

fetchApi().then(renderingCard);

function renderingCard(card) {
    // console.log(Object.values(card));
    console.log(card.hits);
}