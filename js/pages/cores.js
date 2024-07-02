import { fetchSingleCoreData } from '../api.js';
import { updateHeaderTitle, updateTableLeft, updateTableRight, updateCentralData, updatePagination } from '../UI/coresUI.js';


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
        const singleCoreData = await fetchSingleCoreData(page);
        singleCoreData.docs.forEach(item => {
            console.log('Core item:', item);
            updateHeaderTitle(item);
            updateTableLeft(item.id, item.status, item.serial);
            updateTableRight(item.asds_attempts, item.asds_landings, item.reuse_count);
            updateCentralData(item.launches, item.last_update);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleCoreData.page, singleCoreData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}