export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.serial;
}

// Funcion para agregar tabla de la seccion izquierda
export function updateTableLeft(core_id, core_status, core_serial) {
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
                <h3>Core ID</h3>
            </div>
            <div class="value">
                <p>${core_id}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Current status</h3>
            </div>
            <div class="value">
                <p>${core_status}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Product serial</h3>
            </div>
            <div class="value">
                <p>${core_serial}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar tabla de la seccion derecha
export function updateTableRight(landing_attempts, landings_completed, reuse_count) {
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
                <h3>Landing attempts</h3>
            </div>
            <div class="value">
                <p>${landing_attempts}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Landings completed</h3>
            </div>
            <div class="value">
                <p>${landings_completed}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Reuse count</h3>
            </div>
            <div class="value">
                <p>${reuse_count}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar tabla de la seccion central
export function updateCentralData(launches, last_update){
    const centralData = document.getElementById('section__image');
    let lastUpdate = '';
    if (last_update === null) {
        lastUpdate = 'No data available';
    } else {
        lastUpdate = last_update;
    }

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
                <p>${lastUpdate}</p>
            </div>
        </div>
    `;
}


// Funcion para paginar la data
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