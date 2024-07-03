import { fetchSingleLaunchpadData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateTableLeft, updateCentralImage, updateTableRight, updateLandpadDetails, updatePagination } from '../UI/launchpadsUI.js';


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
        const singleLaunchpadData = await fetchSingleLaunchpadData(page);
        singleLaunchpadData.docs.forEach(item => {
            console.log('Launchpad item:', item);
            updateHeaderTitle(item);
            updateLeftSideBar(item.rockets);
            updateTableLeft(item.id, item.locality, item.region);
            updateCentralImage(item.images.large[0]);
            updateTableRight(item.status, item.latitude, item.longitude);
            updateLandpadDetails(item.details)
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleLaunchpadData.page, singleLaunchpadData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}