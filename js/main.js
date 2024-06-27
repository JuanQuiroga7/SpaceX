import { fetchData } from './api.js';


document.addEventListener('DOMContentLoaded', (event) => {
    let page = 1; 

    function updatePage() {
       
        const loadingElements = document.querySelectorAll('.load');
        loadingElements.forEach(element => {
            element.classList.add('load');
        });

        fetchData(page)
            .then(data => {
                console.log('Data:', data);
                data.docs.forEach(item => {
                    console.log('Rocket item:', item);

                    const headerTitle = document.getElementById('header__title');
                    headerTitle.textContent = item.name;
                });

                const loadingElements = document.querySelectorAll('.load');
                loadingElements.forEach(element => {
                    element.classList.remove('load');
                });

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




 



