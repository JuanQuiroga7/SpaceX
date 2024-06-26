import { fetchSingleCrewData } from '../api.js';
import { updateHeaderTitle, updateTableLeft, updateCentralData, updateTableRight, updatePagination } from '../UI/crewUI.js';


export async function updatePage(page) {
    const elementsToClear = [
        'header__title',
        'description__item',
        'section__information__1',
        'section__information__2',
        'section__image',
        'section__information__3',
        'information__2'
    ];

    elementsToClear.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = '';
        }
    });
    const loadingElements = document.querySelectorAll('.load');
    loadingElements.forEach(element => {
        element.classList.add('load');
    });

    try {
        const singleCrewData = await fetchSingleCrewData(page);
        singleCrewData.docs.forEach(item => {
            console.log('Crew item:', item);
            updateHeaderTitle(item);
            updateTableLeft(item.agency, item.launches[0].name)
            updateCentralData(item.wikipedia, item.image);
            updateTableRight(item.status, item.id)
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleCrewData.page, singleCrewData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}