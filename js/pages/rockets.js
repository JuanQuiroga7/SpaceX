import { fetchRocketsData } from '../api.js';
import { updateHeaderTitle, updatePagination } from '../UI/rocketsUI.js';

export function updatePage(page) {

    const loadingElements = document.querySelectorAll('.load');
    loadingElements.forEach(element => {
        element.classList.add('load');
    });

    fetchRocketsData(page)
        .then(data => {
            const maxWeight = Math.max(...data.docs.map(rocket => rocket.mass.kg));
            console.log('Max weight:', maxWeight);
            console.log('Data:', data);
            data.docs.forEach(item => {
                console.log('Rocket item:', item);
                updateHeaderTitle(item);
            });

            loadingElements.forEach(element => {
                element.classList.remove('load');
            });

            updatePagination(data, updatePage);
        })
        .catch(error => {
            console.error('Error al traer la data:', error);
        });
}

