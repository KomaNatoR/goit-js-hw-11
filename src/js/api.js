const URL = 'https://pixabay.com/api/';
const API_KEY = '31888671-f215a97b976f323f834fb73b1';

export function fetchApi() {
    return fetch(`${URL}?key=${API_KEY}&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(resp => resp.json());
};