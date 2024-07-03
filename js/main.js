import { updatePage as updateRocketsPage } from './pages/rockets.js';
import { updatePage as updateCapsulesPage } from './pages/capsules.js';
import { updatePage as updateCrewPage } from './pages/crew.js';
import { updatePage as updateLaunchesPage } from './pages/launches.js';
import { updatePage as updateCoresPage } from './pages/cores.js';
import { updatePage as updateLandpadsPage } from './pages/landpads.js';
import { updatePage as updateShipsPage } from './pages/ships.js';
import { updatePage as updateCompanyPage } from './pages/company.js';
import { updatePage as updateDragonsPage } from './pages/dragons.js';
import { updatePage as updateHistoryPage } from './pages/history.js';
import { updatePage as updateLaunchpadsPage } from './pages/launchpads.js';
import { updatePage as updatePayloadsPage } from './pages/payloads.js';
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

document.getElementById('cores').addEventListener('click', (event) => {
    event.preventDefault();
    updateCoresPage(1);
    updateSelectedNavItem('cores');
});

document.getElementById('landspads').addEventListener('click', (event) => {
    event.preventDefault();
    updateLandpadsPage(1);
    updateSelectedNavItem('landspads');
});

document.getElementById('ships').addEventListener('click', (event) => {
    event.preventDefault();
    updateShipsPage(1);
    updateSelectedNavItem('ships');
});

document.getElementById('company').addEventListener('click', (event) => {
    event.preventDefault();
    updateCompanyPage();
    updateSelectedNavItem('company');
});

document.getElementById('dragos').addEventListener('click', (event) => {
    event.preventDefault();
    updateDragonsPage(1);
    updateSelectedNavItem('dragos');
});

document.getElementById('history').addEventListener('click', (event) => {
    event.preventDefault();
    updateHistoryPage(1);
    updateSelectedNavItem('history');
});

document.getElementById('launchpads').addEventListener('click', (event) => {
    event.preventDefault();
    updateLaunchpadsPage(1);
    updateSelectedNavItem('launchpads');
});

document.getElementById('payloads').addEventListener('click', (event) => {
    event.preventDefault();
    updatePayloadsPage(1);
    updateSelectedNavItem('payloads');
});