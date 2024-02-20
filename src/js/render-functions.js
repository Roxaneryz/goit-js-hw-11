export function renderGallery(images) {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = images.map(createImageCard).join('');
   
  }
  
  function createImageCard(image) {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
  
    return `<li class="card">
    <img
      src="${webformatURL}"
      alt="${tags}"
    />
    <ul>
      <li><span>Comments</span><span>${comments}</span></li>
      <li><span>Views</span><span>${views}</span></li>
      <li><span>Likes</span><span>${likes}</span></li>
      <li><span>Download</span><span>${downloads}</span></li>
    </ul>
  </li>`
  } 
  