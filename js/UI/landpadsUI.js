export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.full_name;
}

// Funcion para agregar left side bar 
export function updateLeftSideBar(launches) {
    const leftSideBar = document.getElementById('description__item');
    let launchesHTML = '';
    launches.forEach(launch => {
        launchesHTML += `
            <p style="font-weight: bold; color: #ffff; margin-right: 20px; font-size: 15px">${launch.name}</p>
        `;
    });

    leftSideBar.innerHTML = `
        <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">LAUNCHES</h1>
        <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
        <div id="launchesBox" style="height: 700px; overflow-y: scroll; width: 80%">
            ${launchesHTML}
        </div>
    `;
}

// Funcion para despliegue de tabla de la izquierda
export function updateTableLeft(status, type, locality) {
    const tableleft = document.getElementById('section__information__2');

    tableleft.innerHTML = `
    <div id="country_rocket">
        <style>
                *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .table__property{

            width: 90%;
            height: 23%;
        
        }
        #country_rocket, #sucess_rate_rocket{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px
        }

        h3{
            padding: 0
        }
        .title{
        
            height: 60%;
            border-radius: 15px 15px 0px 0px;
            background-color: #1d1f38;
            color: #ffff;
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid #55588a
        }
        
        .value{
            height: 50%;
            background-color: #55588a;
            border-radius: 0px 0px 15px 15px;
            color: #ffff;
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        
        }
        </style>
        <div class="table__property">
            <div class="title">
                <h3>Current status</h3>
            </div>
            <div class="value">
                <p>${status}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Landpad type</h3>
            </div>
            <div class="value">
                <p>${type}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Locality</h3>
            </div>
            <div class="value">
                <p>${locality}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para despliegue de imagen central
export function updateCentralImage(image) {
    const centralImage = document.getElementById('section__image');
    centralImage.innerHTML = `
        <style>
            #section__image {
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: var(--color--five);
            }

            #image__landpad__bx{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 30px;
            }

            #image__landpad__bx img{
                border-radius: 15px;
                width: 70%;
                overflow: hidden;
            }
        </style>
        <div id="image__landpad__bx">
            <img style="width: auto; height: 300px;" src="${image}" referrerpolicy="no-referrer" alt="">
        </div>
    `;
}

// Funcion para despliegue de tabla de la derecha
export function updateTableRight(region, latitude, longitude) {
    const tableRight = document.getElementById('section__information__3');
    tableRight.innerHTML = `
    <div id="sucess_rate_rocket">
        <style>
                *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .table__property{

            width: 90%;
            height: 23%;
        
        }
        #country_rocket, #sucess_rate_rocket{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px
        }

        h3{
            padding: 0
        }
        .title{
        
            height: 60%;
            border-radius: 15px 15px 0px 0px;
            background-color: #1d1f38;
            color: #ffff;
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid #55588a
        }
        
        .value{
            height: 50%;
            background-color: #55588a;
            border-radius: 0px 0px 15px 15px;
            color: #ffff;
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        
        }
        </style>
        <div class="table__property">
            <div class="title">
                <h3>Region</h3>
            </div>
            <div class="value">
                <p>${region}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Latitude</h3>
            </div>
            <div class="value">
                <p>${latitude}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Longitude</h3>
            </div>
            <div class="value">
                <p>${longitude}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar detalles de landpads
export function updateLandpadDetails(details) {
    const launchDetails = document.getElementById('information__2');
    launchDetails.innerHTML = `
        <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">DETAILS</h1>
        <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
        <table>
            <tbody>
                <tr>
                    <td style="font-weight: bold; color: #ffff">${details}</td>
                </tr>
            </tbody>
        </table>
    `;
}

// Funcion para paginacion de la data
export function updatePagination(currentPage, totalPages, updatePage) {
    const paginationDiv = document.getElementById('paginacion');
    paginationDiv.innerHTML = ''; 

    if (currentPage > 1) {
        const prevAnchor = document.createElement('a');
        prevAnchor.textContent = '«';
        prevAnchor.href = '#';
        prevAnchor.addEventListener('click', (event) => {
            event.preventDefault(); 
            updatePage(currentPage - 1);
        });
        paginationDiv.appendChild(prevAnchor);
    }

    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + 3, totalPages);

    if (endPage - startPage < 3) {
        startPage = Math.max(endPage - 3, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const anchor = document.createElement('a');
        anchor.textContent = i;
        anchor.href = '#';
        anchor.addEventListener('click', (event) => {
            event.preventDefault(); 
            updatePage(i);
        });
        paginationDiv.appendChild(anchor);
    }

    if (currentPage < totalPages) {
        const nextAnchor = document.createElement('a');
        nextAnchor.textContent = '»';
        nextAnchor.href = '#';
        nextAnchor.addEventListener('click', (event) => {
            event.preventDefault(); 
            updatePage(currentPage + 1);
        });
        paginationDiv.appendChild(nextAnchor);
    }
}