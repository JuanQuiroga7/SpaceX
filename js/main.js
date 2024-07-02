import { updatePage as updateRocketsPage } from './pages/rockets.js';
import { updatePage as updateCapsulesPage } from './pages/capsules.js';
import { updatePage as updateCrewPage } from './pages/crew.js';
import { updatePage as updateLaunchesPage } from './pages/launches.js';
import { updateSelectedNavItem } from './components/selectNav.js';



document.addEventListener('DOMContentLoaded', (event) => {
    updateRocketsPage(1);
});

document.getElementById('rocket').addEventListener('click', (event) => {
    event.preventDefault();
    updateRocketsPage(1);
    updateSelectedNavItem('rocket');
});

document.getElementById('capsules').addEventListener('click', (event) => {
    event.preventDefault();
    updateCapsulesPage(1);
    updateSelectedNavItem('capsules');
});

document.getElementById('crew').addEventListener('click', (event) => {
    event.preventDefault();
    updateCrewPage(1);
    updateSelectedNavItem('crew');
});

document.getElementById('launches').addEventListener('click', (event) => {
    event.preventDefault();
    updateLaunchesPage(1);
    updateSelectedNavItem('launches');
});