export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item;
}

// Funcion para agregar left side bar al DOM
export function updateLeftSideBar() {
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
            <i class="bi bi-wikipedia"></i>
            <p><b>Wikipedia: </b><a href=" https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster">Click here</a> </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>ID: </b> 5eb75f0842fea42237d7f3f4 </p>
        </div>


        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Period day: </b> 557.1958197697352 </p>
        </div>


        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Eartch distance km: </b> 320593735.82924163 </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Mars distance km: </b> 395640511.90355814 </p>
        </div>
    </div>

    `;
}

// Funcion para agregar tabla derecha al DOM
export function updateTableLeft() {
    const tableLeft = document.getElementById('section__information__2');
    tableLeft.innerHTML = `
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
            <h3>Launch date utc</h3>
        </div>
        <div class="value">
            <p>018-02-06</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Launch date Unix</h3>
        </div>
        <div class="value">
            <p>1517949900</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Orbit type </h3>
        </div>
        <div class="value">
            <p>heliocentric</p>
        </div>
        </div>
    </div>
    `;
}

// Funcion para agregar imagen central al DOM
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

            #image__roadster__bx{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 30px;
            }

            #image__roadster__bx{
                overflow: hidden;
            }

            #image__roadster__bx img{
                border-radius: 12px;
            }

        </style>

        <div id="image__roadster__bx">
            <img style="width: auto; height: 300px; border-radius: 20px;" src="${image}" referrerpolicy="no-referrer" alt="">
        </div>
    `;
}

// Funcion para agregar tabla derecha al DOM
export function updateTableRight() {
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
            <p>0.2559348215918733</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Inclination</h3>
        </div>
        <div class="value">
            <p>1.075052357364693</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Longitude</h3>
        </div>
        <div class="value">
            <p>316.9112133411523</p>
        </div>
        </div>
    </div>
    `;
}

// Funcion para agregar right side bar al DOM
export function updateRightSideBar(details) {
    const rightSideBar = document.getElementById('information__2');
    rightSideBar.innerHTML = `
        <style>
            #details__table{
                margin-right: 30px;
            }
        </style>
        
        <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">DETAILS</h1>
        <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
        <table id="details__table">
            <tbody>
                <tr>
                    <td style="font-weight: bold; color: #ffff; margin-right: 20px">${details}</td>
                </tr>
            </tbody>
        </table>
    `;
}