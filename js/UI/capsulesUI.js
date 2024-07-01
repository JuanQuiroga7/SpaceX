export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.serial;
    console.log('Header title:', item.serial);
}

// Funcion para agregar tabla seccion izquiera en el DOM
export function updateTableLeft(capsule_ID, capsule_status, capsule_type) {
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
                <h3>ID of the capsule</h3>
            </div>
            <div class="value">
                <p>${capsule_ID}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Status</h3>
            </div>
            <div class="value">
                <p>${capsule_status}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Type</h3>
            </div>
            <div class="value">
                <p>${capsule_type}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar tabla seccion derecha en el DOM
export function updateTableRight(capsule_serial, water_landings, land_landings) {
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
                <h3>Serial of the capsule</h3>
            </div>
            <div class="value">
                <p>${capsule_serial}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Water landings</h3>
            </div>
            <div class="value">
                <p>${water_landings}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Land landings</h3>
            </div>
            <div class="value">
                <p>${land_landings}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar data en seccion central del DOM
export function updateCentralData(launches, last_update){
    const centralData = document.getElementById('section__image');
    let launchesHTML = '';
    launches.forEach(launch => {
        launchesHTML += `
            <tr>
                <td style="font-weight: bold">${launch.name}</td>
            </tr>
        `;
    });

    centralData.innerHTML = `
        <style>
            #section__image {
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: var(--color--five);
            }
        </style>
        <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">LAUNCHES</h1>
        <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
        <table>
            <tbody>
                ${launchesHTML}
            </tbody>
        </table>
        <style>
                *{
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
                
                
                .last__update{
                    
                    margin-top: 20px;
                    width: 100%;
                    border: 1px solid #55588a;
                    border-radius: 10px;
                }
                
                .title__last__upt{
                    gap: 5px;
                    display: flex;
                    justify-content: center;
                    background-color: #1d1f38;
                    color: var(--color--five);
                    padding: 5px;
                    border-radius: 10px 10px 0px 0px;
                    
                }

                h2{
                    font-size: 20px;
                }

                i{
                    font-size: 20px;
                    color: var(--color--five);
                }
                
                .value__last__upt{
                    display: flex;
                    justify-content: center;
                    padding: 7px;
                }
        </style>
        <div class="last__update">
            <div class="title__last__upt">
                <i class="bi bi-activity"></i>
                <h2>LAST UPDATE</h2>
            </div>
            <div class="value__last__upt">
                <p>${last_update}</p>
            </div>
        </div>
    `;
}


// Funcion para paginacion con flechas para cambio de pagina
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

