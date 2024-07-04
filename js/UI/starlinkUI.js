export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.spaceTrack.OBJECT_NAME;
}

// Funcion para agregar left side bar al DOM
export function updateLeftSideBar(creation_date, originator, center_name, ref_frame, element_theory, period, decay_date, decayed, gp_id) {
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

        .property__box__two{
            width: 100%;

        }

        #returnPayloadMass{
            color: var(--color--five);
            font-size: 20px;
            margin-bottom: 20px;
            margin-left: 20px
        }

        #diameters, #thrusters{
            color: var(--color--five);
            font-size: 20px;
            margin: 30px 0px 20px 20px 

        }

    </style>

    <h2 id="returnPayloadMass">More Information</h2>

    <div class="property__box__two">

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Creation date: </b>${creation_date}</p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Originator: </b> ${originator} </p>
        </div>


        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Center name: </b> ${center_name} </p>
        </div>


        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Ref frame: </b> ${ref_frame} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Element theory: </b> ${element_theory} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Period: </b> ${period} </p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Decay date: </b> ${decay_date} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Decayed: </b> ${decayed} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>GP_ID: </b> ${gp_id} </p>
        </div>
    </div>
    `;
}

// Funcion para agregar tabla izquierda al DOM
export function updateTableLeft(launch_name, version, id) {
    const tableleft = document.getElementById('section__information__2');
    tableleft.innerHTML = `
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
                <h3>Launch</h3>
            </div>
            <div class="value">
                <p>${launch_name}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>version</h3>
            </div>
            <div class="value">
                <p>${version}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>ID </h3>
            </div>
            <div class="value">
                <p>${id}</p>
            </div>
            </div>
        </div>
    `;
}

// Funcion para agregar tabla derecha al DOM
export function updateTableRight(Eccentricity, Inclination, Comment) {
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
    
    }</style>
            <div class="table__property">
        <div class="title">
            <h3>Eccentricity</h3>
        </div>
        <div class="value">
            <p>${Eccentricity}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Inclination</h3>
        </div>
        <div class="value">
            <p>${Inclination}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Comment</h3>
        </div>
        <div class="value">
            <p>${Comment}</p>
        </div>
    </div></div>
    `;
}

// Funcion para agregar rigth side bar al DOM
export function updateRightSideBar(classification_type, norad_cat_id, country_code, site, mean_motion_dot, mean_motion_ddot, semimajor_axis, apoapsis, periapsis) {
    const rightSideBar = document.getElementById('information__2');
    rightSideBar.innerHTML = `
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
                width: 90%

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


            #returnPayloadMass{
                color: var(--color--five);
                font-size: 20px;
                margin-bottom: 20px;
                margin-left: 20px
            }

            #diameters, #thrusters{
                color: var(--color--five);
                font-size: 20px;
                margin: 30px 0px 20px 20px 

            }

        </style>

        <h2 id="returnPayloadMass">More information</h2>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Classification type: </b> ${classification_type} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Norad cat ID: </b> ${norad_cat_id} </p>
        </div>


        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Country code: </b> ${country_code} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Site: </b> ${site} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Mean motion DOT: </b> ${mean_motion_dot} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Mean motion DDT: </b> ${mean_motion_ddot} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Semimajor axis: </b> ${semimajor_axis} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Aproapsis: </b> ${apoapsis} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Periapsis: </b> ${periapsis} </p>
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