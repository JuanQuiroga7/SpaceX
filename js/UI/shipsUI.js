export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.name;
}

// Funcion para agregar left side bar al DOM
export function updateLeftSideBar(imo, mmsi, abs, link_details, mass_lbs, mass_kg) {
    const leftSideBar = document.getElementById('description__item');
    
    leftSideBar.innerHTML = `
    <style>
        .item__container{
            background-color: #1d1f38;
            color: #ffff;
            border-left: 5px solid #55588a;
            width: 100%;
            border-radius: 0px 10px 10px 0px ;
            display: flex;
            align-items: center;
            margin-bottom: 15px;

        }


        .item__container p{

            padding: 15px 15px 15px 0px;
        }

        .item__container i{
            font-size: 25px;
            padding-inline: 5px
        }

        .item__container a{
            color: var(--color--five);
            

        }

        #infoLaunch{
            margin-bottom: 20px
        }
    </style>
    <h2 id="infoLaunch">More information</h2>
    <div class="property__box">
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>IMO: </b> ${imo} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>MMSI:   </b> ${mmsi} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>ABS: </b> ${abs} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Mass lbs: </b> ${mass_lbs} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Mass kg: </b> ${mass_kg} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-paperclip"></i>
            <p><b>Details: </b> <a href="${link_details}">Click here</a></p>
        </div>
    </div>
    `;
}

// Funcion para agregar tabla izquierda 
export function updateTableLeft(type, legacy_id, ship_class) {
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
                <h3>Ship type</h3>
            </div>
            <div class="value">
                <p>${type}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Legacy ID</h3>
            </div>
            <div class="value">
                <p>${legacy_id}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Class</h3>
            </div>
            <div class="value">
                <p>${ship_class}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar imagen central
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

            #image__ship__bx{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 30px;
            }

            #image__ship__bx img{
                border-radius: 12px;
                width: 60%;
                overflow: hidden;
            }
                    }
        </style>
        <div id="image__ship__bx">
            <img style="width: auto; height: 300px;" src="${image}" referrerpolicy="no-referrer" alt="">
        </div>
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