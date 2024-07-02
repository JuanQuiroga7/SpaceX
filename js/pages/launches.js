import { fetchSingleLaunchData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateTableLeft, updateCentralImage, updateTableRight, updateLaunchDetails, updatePagination } from '../UI/launchesUI.js';


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
        const singleLaunchData = await fetchSingleLaunchData(page);
        singleLaunchData.docs.forEach(item => {
            console.log('Launch item:', item);
            updateHeaderTitle(item);
            updateLeftSideBar(item.links.webcast, item.static_fire_date_unix, item.success, item.links.article, item.links.wikipedia)
            updateTableLeft(item.id, item.flight_number, item.date_utc);
            updateCentralImage(item.links.patch.large)
            updateTableRight(item.launchpad.full_name, item.rocket.name, item.cores[0].core.serial); 
            updateLaunchDetails(item.details);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleLaunchData.page, singleLaunchData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}