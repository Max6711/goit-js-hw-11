const API_KEY = '43813609-98f1a5b8a61f7cd1a2ca10379'; 
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = (query = 'cat') => {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        orientation: 'horizontal',
    });

    return fetch(`${BASE_URL}?${searchParams.toString()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            return response.json();
        });
};