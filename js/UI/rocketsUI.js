export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.name;
}

// Funcion para insertar la informacion de la seccion derecha en el DOM
export function updateInformation2(currentWeightKg, maxWeightKg, currentWeightLb, payloadWeights, maxLEOPayload,
    rocketHeightMeters, maxRocketHeight, rocketHeightFeet, rocketDiameterMeters, maxRocketDiameter, rocketDiameterFeet, shieldDiameterMeters, 
    maxShieldDiameter, shieldDiameterFeet, shieldHeightMeters, maxShieldHeight, shieldHeightFeet) {
    const information2 = document.getElementById('information__2');
    let payloadHTML = '';
    payloadWeights.forEach((payload, index) => {
        payloadHTML += `
            <div class="information__container">
                <div>
                    <label>${payload.name}:</label>
                    <progress value="${payload.kg}" max="${maxLEOPayload}"></progress>
                </div>
                <div>
                    <span>
                        ${payload.kg} kg
                        <br>
                        ${payload.lb} lbs
                    </span>
                </div>
            </div>
        `;
    });
    let shieldHTML = '';
if (shieldDiameterMeters && shieldHeightMeters) {
    shieldHTML = `
        <div class="information__container">
            <div>
                <label>Diameter rocket shield:</label>
                <progress value="${shieldDiameterMeters}" max="${maxShieldDiameter}"></progress>
            </div>
            <div>
                <span>
                    ${shieldDiameterMeters} mts
                    <br>
                    ${shieldDiameterFeet} ft
                </span>
            </div>
        </div>
        <div class="information__container">
            <div>
                <label>Height rocket shield:</label>
                <progress value="${shieldHeightMeters}" max="${maxShieldHeight}"></progress>
            </div>
            <div>
                <span>
                    ${shieldHeightMeters} mts
                    <br>
                    ${shieldHeightFeet} ft
                </span>
            </div>
        </div>
    `;
}
    information2.innerHTML = `
        <div class="information__container">
            <div>
                <label>Rocket weight:</label>
                <progress value="${currentWeightKg}" max="${maxWeightKg}"></progress>
            </div>
            <div>
                <span>
                    ${currentWeightKg} kg
                    <br>
                    ${currentWeightLb} lbs
                </span>
            </div>
        </div>
        ${payloadHTML}
        <div class="information__container">
            <div>
                <label>Rocket height:</label>
                <progress value="${rocketHeightMeters}" max="${maxRocketHeight}"></progress>
            </div>
            <div>
                <span>
                    ${rocketHeightMeters} mts
                    <br>
                    ${rocketHeightFeet} ft
                </span>
            </div>
        </div>
        <div class="information__container">
            <div>
                <label>Rocket diameter:</label>
                <progress value="${rocketDiameterMeters}" max="${maxRocketDiameter}"></progress>
            </div>
            <div>
                <span>
                    ${rocketDiameterMeters} mts
                    <br>
                    ${rocketDiameterFeet} ft
                </span>
            </div>
        </div>
        ${shieldHTML}
    `;
}

// Funcion para insertar la informacion de la seccion izquierda en el DOM
export function updateDescription(rocketId, rocketDescription, Stage1_reusable, Stage1_fuel, Stage1_engines, Stage2_reusable, Stage2_fuel, Stage2_engines) {
    const descriptionItem = document.getElementById('description__item');

    let descriptionHTML = `
        <div class="rocket__id">
            <p id="id_rocket">Rocket ID: ${rocketId}</p>
        </div>
        <h3 id="description__title">Description</h3>
        <div class="each_rocket__description">${rocketDescription}</div>
        <h3 id="stages__title">Stages</h3>
        <div class="stages__container">
            <div class="stage_1">
                <div class="stage__photo">
                    <img src="https://cdn-icons-png.freepik.com/512/13153/13153777.png?uid=R147375896&ga=GA1.1.561037085.1719784258" alt="">
                </div>
                <div class="stage__information">
                    <p id="1_reusableStage"><b>Reusable: ${Stage1_reusable}</b></p>
                    <p id="1_fuel"><b>Fuel tons: ${Stage1_fuel}</b></p>
                    <p id="1_engines"><b>Engines: ${Stage1_engines}</b></p>
                </div>
            </div>
            <div class="stage_2">
                <div class="stage__photo">
                    <img src="https://cdn-icons-png.freepik.com/512/13153/13153824.png?uid=R147375896&ga=GA1.1.561037085.1719784258" alt="">
                </div>
                <div class="stage__information">
                    <p id="2_reusableStage"><b>Reusable: ${Stage2_reusable}</b></p>
                    <p id="2_fuel"><b>Fuel tons: ${Stage2_fuel}</b></p>
                    <p id="2_engines"><b>Engines: ${Stage2_engines}</b></p>
                </div>
            </div>
        </div>
        
    `;

    descriptionItem.innerHTML = descriptionHTML;
}


// Funcion para insertar la paginacion en el DOM
export function updatePagination(data, updatePage) {
    const paginationDiv = document.getElementById('paginacion');
    paginationDiv.innerHTML = ''; 
    for (let i = 1; i <= data.totalPages; i++) {
        const anchor = document.createElement('a');
        anchor.textContent = i;
        anchor.href = '#';
        anchor.addEventListener('click', (event) => {
            event.preventDefault(); 
            updatePage(i);
        });
        paginationDiv.appendChild(anchor);
    }
}