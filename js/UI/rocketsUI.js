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
export function updateDescription(rocketId, rocketDescription, Stage1_reusable, Stage1_fuel, Stage1_engines, Stage2_reusable, 
    Stage2_fuel, Stage2_engines, first_flight, cost_per_launch, active) {
    const descriptionItem = document.getElementById('description__item');
    
    let activeHTML = '';
    if (active===true) {
        activeHTML = `
        <div class="status">
            <div class="icon">
                <img src="https://cdn-icons-png.freepik.com/512/889/889727.png?uid=R147375896&ga=GA1.1.561037085.1719784258" alt="">
            </div>
            <div class="text">
                <h4 id="status_title">Rocket status</h4>
                <p id="status_rocket">Active</p>
            </div>
        </div>
        `;
    } else {
        activeHTML = `
        <div class="status">
            <div class="icon">
                <img src="https://cdn-icons-png.freepik.com/512/889/889731.png?uid=R147375896&ga=GA1.1.561037085.1719784258" alt="">
            </div>
            <div class="text">
                <h4 id="status_title">Rocket status</h4>
                <p id="status_rocket">Not active</p>
            </div>
        </div>
        `;
    }

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
        <h3 id="more_information">More Information</h3>
        <div class="more_information_rocket">
            <div class="first_flight">
                <div class="icon">
                    <img src="https://cdn-icons-png.freepik.com/512/473/473161.png?uid=R147375896&ga=GA1.1.561037085.1719784258" alt="">
                </div>
                <div class="text">
                    <h4 id="first_flight_title">First flight</h4>
                    <p id="date_first_flight">${first_flight}</p>
                </div>
            </div>
            <div class="cost_launch">
                <div class="icon">
                    <img src="https://cdn-icons-png.freepik.com/512/4106/4106601.png?uid=R147375896&ga=GA1.1.561037085.1719784258"" alt="">
                </div>
                <div class="text">
                    <h4 id="cost_launch_title">Cost of launch</h4>
                    <p id="cost_dollars">$ ${cost_per_launch}</p>
                </div>
            </div>
            ${activeHTML}
        </div>
    `;

    descriptionItem.innerHTML = descriptionHTML;
}


// Funcion para insertar section 2 en el DOM
export function updateSectionInformation2(country_name, Type, active, stages, boosters, landing_legs, rocket_material) {
    const sectionInformation2 = document.getElementById('section__information__2');
    let flagHTML = '';
    if (country_name === 'United States') {
        flagHTML = `
        <div class="flagCountry">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/united-states-flag-pole-5082845-4234133.png" alt="">
        </div>
        `;
    } else {
        flagHTML = `
        <div class="flagCountry">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/marshall-islands-flag-pole-5082826-4234114.png?f=webp" alt="">
        </div>
        `;
    }
    let service;
    if (active===true) {
        service = "Active";
    } else {
        service = "OOS";
    }
    let material;
    if (rocket_material === null) {
        material = "unknown";
    } else {
        material = rocket_material;
    }

    sectionInformation2.innerHTML = `
        <div id="country_rocket">
            <div class="divCountry">
                ${flagHTML}
                <div class="informationCountry">
                    <h2>Country of origin</h2>
                    <p>${country_name}</p>
                </div>
            </div>
        </div>
        <div id="information__table__1" class="information__table__1">
            <h3>Rocket Information</h3>
            <hr>
            <div class="table__container__1">
                <div>
                    <span>Type:</span>
                    <strong>${Type}</strong>
                </div>
                <div>
                    <span>Rocket in service:</span>
                    <strong>${service}</strong>
                </div>
                <div>
                    <span>Number of stages:</span>
                    <strong>${stages}</strong>
                </div>
                <div>
                    <span>Number of boosters:</span>
                    <strong>${boosters}</strong>
                </div>
                <div>
                    <span>Landing legs:</span>
                    <strong>${landing_legs}</strong>
                </div>
                <div>
                    <span>Leg material:</span>
                    <strong>${material}</strong>
                </div>
            </div>
        </div>
    `;
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