import { fetchAllRocketsData, fetchSingleRocketData } from '../api.js';
import { updateHeaderTitle, updateInformation2, updateDescription, updateSectionInformation2, updateImage, updateSectionInformation3, updateSectionInformation1, updatePagination } from '../UI/rocketsUI.js';

export async function updatePage(page) {
    const loadingElements = document.querySelectorAll('.load');
    loadingElements.forEach(element => {
        element.classList.add('load');
    });

    try {
        const allRocketsData = await fetchAllRocketsData();
        const maxWeight = Math.max(...allRocketsData.docs.map(rocket => rocket.mass.kg));
        const maxLEOPayload = Math.max(...allRocketsData.docs.map(rocket => rocket.payload_weights[0].kg));
        const maxHeight = Math.max(...allRocketsData.docs.map(rocket => rocket.height.meters));
        const maxDiameter = Math.max(...allRocketsData.docs.map(rocket => rocket.diameter.meters));
        const maxShieldDiameter = Math.max(...allRocketsData.docs.map(rocket => rocket.second_stage.payloads.composite_fairing.diameter.meters));
        const maxShieldHeight = Math.max(...allRocketsData.docs.map(rocket => rocket.second_stage.payloads.composite_fairing.height.meters));
        const maxTSL = Math.max(...allRocketsData.docs.map(rocket => rocket.engines.thrust_sea_level.kN));
        const maxTV = Math.max(...allRocketsData.docs.map(rocket => rocket.engines.thrust_vacuum.kN));

        console.log('Max TSL:', maxTSL);

        const singleRocketData = await fetchSingleRocketData(page);
        singleRocketData.docs.forEach(item => {
            console.log('max', maxWeight)
            console.log('Rocket item:', item);
            updateHeaderTitle(item);
            updateInformation2(item.mass.kg, maxWeight, item.mass.lb, item.payload_weights, maxLEOPayload,
                item.height.meters, maxHeight, item.height.feet, item.diameter.meters, maxDiameter, item.diameter.feet, 
                item.second_stage.payloads.composite_fairing.diameter.meters, maxShieldDiameter, item.second_stage.payloads.composite_fairing.diameter.feet, 
                item.second_stage.payloads.composite_fairing.height.meters, maxShieldHeight, item.second_stage.payloads.composite_fairing.height.feet);
            updateDescription(item.id, item.description, item.first_stage.reusable, item.first_stage.fuel_amount_tons, item.first_stage.engines, 
                item.second_stage.reusable, item.second_stage.fuel_amount_tons, item.second_stage.engines, item.first_flight, item.cost_per_launch, 
                item.active);
            updateSectionInformation2(item.country, item.type, item.active, item.stages, item.boosters, item.landing_legs.number,
                item.landing_legs.material,);
            updateImage(item.flickr_images);
            updateSectionInformation3(item.success_rate_pct, item.engines.type, item.engines.engine_loss_max, item.engines.layout, item.engines.number,
                item.engines.propellant_1, item.engines.propellant_2);
            updateSectionInformation1(item.engines.thrust_sea_level.kN, maxTSL, item.engines.thrust_sea_level.lbf, maxTV, item.engines.thrust_sea_level.kN,
                item.engines.thrust_vacuum.lbf)
        });

        loadingElements.forEach(element => {
            element.classList.remove('load');
        });

        updatePagination(singleRocketData, updatePage);
    } catch (error) {
        console.error('Error al traer la data:', error);
    }
}
