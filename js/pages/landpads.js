import { fetchSingleLandpadData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateTableLeft, updateCentralImage, updateTableRight, updateLandpadDetails, updatePagination } from '../UI/landpadsUI.js';


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
        const singleLandpadData = await fetchSingleLandpadData(page);
        singleLandpadData.docs.forEach(item => {
            console.log('Landpad item:', item);
            updateHeaderTitle(item);
            updateLeftSideBar(item.launches);
            updateTableLeft(item.status, item.type, item.locality);
            updateCentralImage(item.images.large);
            updateTableRight(item.region, item.latitude, item.longitude);
            updateLandpadDetails(item.details);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleLandpadData.page, singleLandpadData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}