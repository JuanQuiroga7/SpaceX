import { fetchSingleDragonData } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateTableLeft, updateCentralImage, updateTableRight, updateRightSideBar, updatePagination } from '../UI/dragonsUI.js';


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
        const singleDragonData = await fetchSingleDragonData(page);
        singleDragonData.docs.forEach(item => {
            console.log('Dragons item:', item);
            updateHeaderTitle(item);
            updateLeftSideBar(item.heat_shield.material, item.heat_shield.size_meters ,item.heat_shield.temp_degrees, item.heat_shield.dev_partner,
            item.launch_payload_mass.kg, item.launch_payload_mass.lb, item.launch_payload_vol.cubic_meters, item.launch_payload_vol.cubic_feet);
            updateTableLeft(item.type, item.active, item.first_flight);
            updateCentralImage(item.flickr_images[0]);
            updateTableRight(item.id, item.dry_mass_kg, item.dry_mass_lb);
            updateRightSideBar();
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleDragonData.page, singleDragonData.totalPages, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}