import { fetchSingleHistoryData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateDetails, updateTableRight, updatePagination } from '../UI/historyUI.js';


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
        const singleHistoryData = await fetchSingleHistoryData(page);
        singleHistoryData.docs.forEach(item => {
            console.log('History item:', item);
            updateHeaderTitle(item);
            updateLeftSideBar(item.event_date_utc, item.event_date_unix);
            updateDetails(item.details);
            updateTableRight(item.id, item.links.article);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleHistoryData.page, singleHistoryData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}