import { updatePage as updateRocketsPage } from './pages/rockets.js';
import { updatePage as updateCapsulesPage } from './pages/capsules.js';
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

