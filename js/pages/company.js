import { fetchCompanyInfo } from '../api.js';
import { updateHeaderTitle, updateLeftSideBar, updateCentralImage, updateRightSideBar } from '../UI/companyUI.js';


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
        const companyData = await fetchCompanyInfo();
        
        console.log('Company item:', companyData);
        updateHeaderTitle(companyData);
        updateLeftSideBar(companyData.links.website, companyData.links.twitter, companyData.links.elon_twitter, companyData.summary);
        updateCentralImage(companyData.links.flickr)
        updateRightSideBar();

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}