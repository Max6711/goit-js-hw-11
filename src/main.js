import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader'); 

let lightbox; 

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Пожалуйста, введите ключевое слово для поиска',
    });
    return;
  }

 
  loader.classList.remove('hidden'); 

  fetchImages(query)
    .then(images => {
      
      loader.classList.add('hidden'); 

     
      gallery.innerHTML = '';

      renderImages(images, gallery);

     
      if (gallery.querySelectorAll('.image-card a').length > 0) {
        
        lightbox = new SimpleLightbox('.image-card a', {
         
        });
        
        if (event.target.nodeName !== 'IMG') return;
        if (lightbox) {
          lightbox.refresh();
        } else {
          console.error('Lightbox is not initialized.');
        }
      } else {
        console.error('No images found for lightbox to handle.');
      }
      input.value = '';
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message:
          'Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте еще раз.',
      });
    });
});
