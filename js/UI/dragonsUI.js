export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.name;
}

// Funcion para agregar left side bar al DOM
export function updateLeftSideBar(material, size_meters, temp_degrees, dev_partner, mass_kg, mass_lb, cubic_meters, cubic_feet) {
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

        .property__box{
            width: 90%
        }

        #infoLaunch{
            margin-bottom: 20px;
            font-size: 20px
        }

        #infoDragonsLaunchPaylodMass, #infoDragonsLaunchPaylodVol{
            margin: 30px 0px 20px 0px;
            font-size: 20px
        }
    </style>

    <h2 id="infoLaunch">Heat shield Information</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-backpack4"></i>
            <p><b>Material: </b> ${material} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-arrows"></i>
            <p><b>Size meters: </b> ${size_meters} </p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-thermometer-high"></i>
            <p><b>Temp degree: </b> ${temp_degrees} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-p-circle"></i>
            <p><b>Dev partner </b> ${dev_partner} </p>
        </div>

    </div>

    <h2 id="infoDragonsLaunchPaylodMass">Launch payload mass</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-hammer"></i>
            <p><b>Kgs: </b> ${mass_kg} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-hammer"></i>
            <p><b>Lbs: </b> ${mass_lb} </p>
        </div>

    </div>

    <h2 id="infoDragonsLaunchPaylodVol">Launch payload Volume</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-badge-vo"></i>
            <p><b>Cubic meters: </b> ${cubic_meters} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-badge-vo"></i>
            <p><b>Cubic feet: </b> ${cubic_feet} </p>
        </div>
    </div>
    `;
}

// Funcion para agregar tabla izquierda al DOM
export function updateTableLeft(type, active, first_flight) {
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
                        <h3>Type</h3>
                    </div>
                    <div class="value">
                        <p>${type}</p>
                    </div>
                    </div>
                    <div class="table__property">
                    <div class="title">
                        <h3>Active</h3>
                    </div>
                    <div class="value">
                        <p>${active}</p>
                    </div>
                    </div>
                    <div class="table__property">
                    <div class="title">
                        <h3>First flight</h3>
                    </div>
                    <div class="value">
                        <p>${first_flight}</p>
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

        #image__dragon__bx{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 30px;
        }

        #image__dragon__bx img{
            border-radius: 12px;
            width: 60%;
            overflow: hidden;
        }
    </style>

    <div id="image__dragon__bx">
        <img style="width: auto; height: 300px;" src="${image}" referrerpolicy="no-referrer" alt="">
    </div></div>
    `;
}
    
// Funcion para agregar tabla derecha al DOM
export function updateTableRight(dragon_id, dry_mass_kg, dry_mass_lb) {
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
                    <h3>Dragon ID</h3>
                </div>
                <div class="value">
                    <p>${dragon_id}</p>
                </div>
                </div>
                <div class="table__property">
                <div class="title">
                    <h3>Dry mass kg</h3>
                </div>
                <div class="value">
                    <p>${dry_mass_kg}</p>
                </div>
                </div>
                <div class="table__property">
                <div class="title">
                    <h3>Dry mass lb</h3>
                </div>
                <div class="value">
                    <p>${dry_mass_lb}</p>
                </div>
            </div>
        </div>
    `;
}

// Funcion para agregar right side bar al DOM
export function updateRightSideBar() {
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
                width: 90%;
                margin-left: 20px;
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

        <h2 id="returnPayloadMass">Return payload Mass</h2>

        <div class="property__box__two">

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>KGS: </b> 3000 </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>LBS: </b> 6614 </p>
            </div>

        </div>

        <h2 id="diameters">Diameters</h2>

        <div class="property__box__two">

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Meters: </b> 3.7 </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Feet: </b> 12 </p>
            </div>

        </div>

        <h2 id="thrusters">Thrusters</h2>

        <div class="property__box__two">

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Type: </b> Draco </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Amount: </b> 18 </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Fuel 1: </b> nitrogen tetroxide </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Fuel 2: </b> monomethylhydrazine </p>
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