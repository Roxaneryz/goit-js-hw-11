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
}; 

