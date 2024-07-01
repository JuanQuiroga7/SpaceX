import { fetchSingleCapsuleData } from '../api.js';
import { updateHeaderTitle, updateTableLeft, updateTableRight, updateCentralData, updatePagination } from '../UI/capsulesUI.js';

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
        const singleCapsuleData = await fetchSingleCapsuleData(page);
        singleCapsuleData.docs.forEach(item => {
            console.log('Capsule item:', item);
            updateHeaderTitle(item);
            updateTableLeft(item.id, item.status, item.type);
            updateTableRight(item.serial, item.water_landings, item.land_landings);
            updateCentralData(item.launches, item.last_update);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleCapsuleData.page, singleCapsuleData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}

