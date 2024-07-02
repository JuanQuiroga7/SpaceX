import { fetchSingleShipData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateTableLeft, updateCentralImage, updatePagination } from '../UI/shipsUI.js';


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
        const singleShipData = await fetchSingleShipData(page);
        singleShipData.docs.forEach(item => {
            console.log('Ships item:', item);
            updateHeaderTitle(item);
            updateLeftSideBar(item.imo, item.mmsi, item.abs, item.link, item.mass_lbs, item.mass_kg);
            updateTableLeft(item.type, item.legacy_id, item.class);
            updateCentralImage(item.image);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleShipData.page, singleShipData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}