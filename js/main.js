import { fetchData } from './api.js';


let page = 1; 

  function updatePage() {
    fetchData(page)
      .then(data => {
        console.log('Data:', data);
        const dataDisplay = document.getElementById('dataDisplay');
        dataDisplay.innerHTML = ''; 
        data.docs.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.name;
          dataDisplay.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error al traer la data:', error);
      });
  }

  document.getElementById('prevButton').addEventListener('click', () => {
    if (page > 1) {
      page--;
      updatePage();
    }
  });
  
  document.getElementById('nextButton').addEventListener('click', () => {
    page++;
    updatePage();
  });
  
  updatePage();








