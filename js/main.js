import { fetchData } from './api.js';


document.addEventListener('DOMContentLoaded', (event) => {
    let page = 1; 

    function updatePage() {
        fetchData(page)
            .then(data => {
                console.log('Data:', data);
                data.docs.forEach(item => {
                    console.log('Rocket item:', item);

                    // Update the header title with the name of the rocket
                    const headerTitle = document.getElementById('header__title');
                    headerTitle.textContent = item.name;
                });

                // Remove the 'load' class from the loading elements
                const loadingElements = document.querySelectorAll('.load');
                loadingElements.forEach(element => {
                    element.classList.remove('load');
                });

                // Generate pagination buttons and attach event listeners
                const paginationDiv = document.getElementById('paginacion');
                console.log('pagination div', paginationDiv)
                paginationDiv.innerHTML = ''; 
                for (let i = 1; i <= data.totalPages; i++) {
                    const anchor = document.createElement('a');
                    anchor.textContent = i;
                    anchor.href = '#';
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault(); 
                        page = i;
                        updatePage();
                    });
                    paginationDiv.appendChild(anchor);
                }
            })
            .catch(error => {
                console.error('Error al traer la data:', error);
            });
    }

    updatePage();
});




 



