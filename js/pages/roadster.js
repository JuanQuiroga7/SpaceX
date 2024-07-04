import { fetchSingleRoadsterData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateTableLeft, updateCentralImage, updateTableRight, updateRightSideBar } from '../UI/roadsterUI.js';


export async function updatePage() {
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

    const paginationElement = document.getElementById('paginacion');

    if (paginationElement) {
        paginationElement.remove();
    }


    try {
        const singleRoadsterData = await fetchSingleRoadsterData();
        console.log('Roadster data:', singleRoadsterData);

        updateHeaderTitle(singleRoadsterData.name);
        updateLeftSideBar();
        updateTableLeft();
        updateCentralImage(singleRoadsterData.flickr_images[3]);
        updateTableRight();
        updateRightSideBar(singleRoadsterData.details);
     

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });


    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}