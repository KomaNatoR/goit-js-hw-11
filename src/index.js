import { fetchApi } from './js/api';
import { cardTemplate } from './js/templates';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    searchForm: document.querySelector('.search-form'),
    galegyEl: document.querySelector('.gallery'),
    loadmoreBtn: document.querySelector('.load-more'),
    pEl: document.querySelector('.end_of_colection'),
};
refs.searchForm.addEventListener('submit', onSearch);
refs.loadmoreBtn.addEventListener('click', onLoadmore);

let searchQuery = '';
let page = 1;
let per_page = 20;

function onSearch(e) {
    e.preventDefault();
    searchQuery = e.currentTarget.elements.searchQuery.value;
    if (searchQuery.trim().length === 0) return Notiflix.Notify.failure('Sorry, input some data!');

    page = 1;
    refs.galegyEl.innerHTML = "";
    fetchApi(searchQuery,page,per_page).then(renderingCard).catch(error);
};


function renderingCard(data) {
    if (data.hits.length === 0) return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    if (data.totalHits<=per_page*page) {
        refs.loadmoreBtn.classList.add('is-hidden');
        refs.pEl.classList.remove('is-hidden');
        return;
    };

    const cardsTemplate = data.hits.map(card => cardTemplate(card));
    refs.galegyEl.insertAdjacentHTML('beforeend', cardsTemplate.join(''));

    refs.loadmoreBtn.classList.remove('is-hidden');
    const lightbox = new SimpleLightbox('.simplelightbox', {
        captionDelay: '250',
    });

    console.log(data);
    console.log(data.totalHits);
    console.log(data.totalHits<=per_page*page);
};

function onLoadmore(e) {    
    page += 1;
    fetchApi(searchQuery,page,per_page).then(renderingCard);
};
function error(er) {
    return Notiflix.Notify.failure('Sorry we cant load pictures. Try again!');
}
