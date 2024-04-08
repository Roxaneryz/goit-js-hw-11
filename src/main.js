import {fetchImages} from './js/pixabay-api.js'
import {renderGallery} from './js/render-functions.js'


const formElem = document.querySelector("#search-form");
const loader =  document.querySelector('.hide');
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = formElem.elements.input.value;
showLoader();
        fetchImages(query)
        .then(res => {
            renderGallery(res);
            hideLoader();
            clearForm();
        })
        
}) 

function showLoader (){
loader.classList.remove('hide');
}

function hideLoader (){
    loader.classList.add('hide');
}

function clearForm () {
    formElem.reset();
}