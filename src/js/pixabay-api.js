const loader = document.querySelector('.loader');

function fetchImg(searchInput) {
  const apiKey = '42869495-3eaffa1d7f59c13a6a9af4ac7';
  const searchWord = searchInput.value;
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchWord}&orientation=horizontal&safesearch=true`;
  showLoader();
  if (searchWord === '') {
    return;
  }

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default fetchImg;

function showLoader() {
  loader.classList.add('is-open');
}
function hideLoader() {
  loader.classList.remove('is-open');
}