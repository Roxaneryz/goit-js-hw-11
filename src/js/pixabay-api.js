import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const API_KEY = '42454875-eb3549610f297412779ff13b6'; 
export const fetchImages = async (searchTerm) => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }



  fetchImages(query)
  .then(res => {
      if (res.length === 0) {
          // Показати повідомлення про помилку, якщо відповідь порожня
          iziToast.error({
              title: 'Помилка',
              message: 'Вибачте, не знайдено зображень, які відповідають вашому запиту. Будь ласка, спробуйте ще раз!'
          });
      } else {
          renderGallery(res);
      }

      hideLoader();
  })
  .catch(error => {
      // Показати повідомлення про помилку для будь-яких помилок під час виклику fetch
      iziToast.error({
          title: 'Помилка',
          message: 'Під час отримання зображень виникла помилка. Будь ласка, спробуйте ще раз пізніше.'
      });
      console.error('Помилка при отриманні зображень:', error);
      hideLoader();
  });



}; 

iziToast.show({
  title: 'Hey',
  message: 'What would you like to add?'
});
