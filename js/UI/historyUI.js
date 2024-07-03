export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.title;
}

// Funcion para agregar tabla izquierda al DOM
export function updateLeftSideBar(date_utc, date_unix) {
    const leftSideBar = document.getElementById('section__information__2');
    
    leftSideBar.innerHTML = `
    <div id="country_rocket">
        <style>    *{
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
        
        }</style>
        <div class="table__property">
            <div class="title">
                <h3>Event date utc</h3>
            </div>
            <div class="value">
                <p>${date_utc}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Event date unix</h3>
            </div>
            <div class="value">
                <p>${date_unix}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar detalles en seccion central
export function updateDetails(details_item) {
    const details = document.getElementById('section__image');
    details.innerHTML = `
        <style>

        #section__image {
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--color--five);
        }

        #textDetails {
            text-align: center;
        }

        </style>
        <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">DETAILS</h1>
        <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
        <table>
            <tbody>
                <tr>
                    <td id="textDetails" style="font-weight: bold">${details_item}</td>
                </tr>
            </tbody>
        </table>
    `;

}

// Funcion para agregar tabla derecha al DOM
export function updateTableRight(history_id, article_link) {
    const tableRight = document.getElementById('section__information__3');
    tableRight.innerHTML = `
        <div id="sucess_rate_rocket">
            <style>    *{
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
                #linkHistory{
                    color: var(--color--five);
                }
            </style>
            <div class="table__property">
                <div class="title">
                    <h3>Article</h3>
                </div>
                <div class="value">
                    <p><a id="linkHistory" href="${article_link}">Click here</a></p>
                </div>
                </div>
                <div class="table__property">
                <div class="title">
                    <h3>ID</h3>
                </div>
                <div class="value">
                    <p>${history_id}</p>
                </div>
                </div>
        </div>
    `;
}


// Funcion para agregar paginacion al DOM
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