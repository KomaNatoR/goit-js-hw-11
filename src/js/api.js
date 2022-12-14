
import axios from 'axios';

export async function fetchApi(searchQuery,page,per_page) {
    const API_KEY = '31888671-f215a97b976f323f834fb73b1';
    const BASE_URL = 'https://pixabay.com/api/';

    return await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`)
        .then(res => res.data);
};