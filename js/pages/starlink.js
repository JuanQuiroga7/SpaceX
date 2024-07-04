import { fetchSingleStarlinkData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateTableLeft, updateTableRight, updateRightSideBar, updatePagination } from '../UI/starlinkUI.js';


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
        const singleStarlinkData = await fetchSingleStarlinkData(page);
        singleStarlinkData.docs.forEach(item => {
            console.log('Starlink item:', item);
            updateHeaderTitle(item);
            updateLeftSideBar(item.spaceTrack.CREATION_DATE, item.spaceTrack.ORIGINATOR, item.spaceTrack.CENTER_NAME, item.spaceTrack.REF_FRAME, 
            item.spaceTrack.MEAN_ELEMENT_THEORY, item.spaceTrack.PERIOD, item.spaceTrack.EPOCH, item.spaceTrack.DECAYED, item.spaceTrack.GP_ID);
            updateTableLeft(item.launch.name, item.version, item.id);
            updateTableRight(item.spaceTrack.ECCENTRICITY, item.spaceTrack.INCLINATION, item.spaceTrack.COMMENT);
            updateRightSideBar(item.spaceTrack.CLASSIFICATION_TYPE, item.spaceTrack.NORAD_CAT_ID, item.spaceTrack.COUNTRY_CODE, item.spaceTrack.SITE, 
            item.spaceTrack.MEAN_MOTION_DOT, item.spaceTrack.MEAN_MOTION_DDOT, item.spaceTrack.SEMIMAJOR_AXIS, item.spaceTrack.APOAPSIS, item.spaceTrack.PERIAPSIS);
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleStarlinkData.page, singleStarlinkData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}