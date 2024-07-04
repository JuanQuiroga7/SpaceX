import { fetchSinglePayloadData } from '../api.js';
import { updateHeaderTitle, updateTableLeft, updateTableRight, updateCentralSection, updatePagination } from '../UI/payloadsUI.js';

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
        const singlePayloadData = await fetchSinglePayloadData(page);
        singlePayloadData.docs.forEach(item => {
            console.log('Payload item:', item);
            updateHeaderTitle(item);
            updateTableLeft(item.type, item.launch.name, item.reused);
            updateTableRight(item.orbit, item.reference_system, item.regime);
            updateCentralSection(item.id);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singlePayloadData.page, singlePayloadData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}