import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 


const API_KEY = '42454875-eb3549610f297412779ff13b6';
 
export function fetchImages (searchImg){

  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchImg}&image_type=photo&orientation=horizontal&safesearch=true`;

// const BASE_URL = 'https://pixabay.com/api';
// const END_POINT = '/key';
// const params = new URLSearchParams({
//       q: 'searchImg',
//       image_type:'photo',
//       orientation: 'horizontal',
//       safesearch: true
   
// })
// const url = `${BASE_URL}${END_POINT}${API_KEY}${params}`;

return fetch(url).then(response =>{

    if (!response.ok){
      throw new Error ('');
    }

    return response.json();
})

    .then(data =>{
      if(data.hits.length > 0){
        return data.hits
      }
      else {
        iziToast.error({
          position: "center",
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return [];
      }

    })
    .catch(error => {
      iziToast.error({
        position: "center",
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!'
      });

      return [];
    })

    }