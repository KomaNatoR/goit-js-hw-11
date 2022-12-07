import { fetchApi } from './js/api';
import { cardTemplate } from './js/templates';
import Notiflix from 'notiflix';

const refs = {
    searchForm: document.querySelector('.search-form'),
    galegyEl: document.querySelector('.gallery'),
};
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchQuery.value;
    if (searchQuery.trim().length === 0) {
       return refs.galegyEl.innerHTML = "";
    };

    console.dir(searchQuery);
    fetchApi(searchQuery).then(renderingCard);
};


function renderingCard(data) {
    if (data.length === 0) return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    // console.log(data.hits[0]);
    const cardsTemplate = data.hits.map(card => cardTemplate(card));

    refs.galegyEl.innerHTML = cardsTemplate.join('');
};