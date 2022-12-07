

export function fetchApi(searchQuery) {
    const API_KEY = '31888671-f215a97b976f323f834fb73b1';
    const BASE_URL = 'https://pixabay.com/api/';

    return fetch(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10`)
        .then(resp => resp.json());
};