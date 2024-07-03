export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.name;
}

// Funcion para agregar left side bar al DOM
export function updateLeftSideBar(website, twitter, elonTwitter, company_info) {
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
                width: 135%
            }

            #infoCompany{
                margin-bottom: 20px
            }

            #headquarters{
                margin: 20px 0px 20px 0px
            }
        </style>

        <h2 id="infoCompany">Links</h2>

        <div class="property__box">

            <div class="item__container">
                <i class="bi bi-browser-edge"></i>
                <p><b>Website: </b> ${website} </p>
            </div>

            <div class="item__container">
                <i class="bi bi-twitter"></i>
                <p><b>Twitter: </b> ${twitter} </p>
            </div>
            
            <div class="item__container">
                <i class="bi bi-twitter"></i>
                <p><b>Elon twitter: </b> ${elonTwitter} </p>
            </div>

        </div>

        <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">Summary</h1>
        <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
        <table>
            <tbody><tr>
                <td id="sumary" style="font-weight: bold">${company_info}</td>
            </tr>

        </tbody></table>
        
        <h2 id="headquarters">Headquarters</h2>

        <div class="property__box">

            <div class="item__container">
                <i class="bi bi-geo"></i>
                <p><b>Address: </b> Rocket Road </p>
            </div>

            <div class="item__container">
                <i class="bi bi-pin-map"></i>
                <p><b>City: </b> Hawthorne </p>
            </div>
            
            <div class="item__container">
                <i class="bi bi-pin-map"></i>
                <p><b>State: </b> California </p>
            </div>

        </div>
    `;
}
    
// Funcion para imagen central de la pagina
export function updateCentralImage() {
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

        #image__company__bx{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 30px;
        }

        #image__company__bx img{
            border-radius: 12px;
            width: 60%;
            overflow: hidden;
        }
    </style>
    <div id="image__company__bx">
        <img style="width: auto; height: 300px;" src="../storage/img/spacex.jpg" referrerpolicy="no-referrer" alt="">
    </div>
    `;
}

// Funcion para agregar right side bar al DOM
export function updateRightSideBar() {
    const rightSideBar = document.getElementById('information__2');
    rightSideBar.innerHTML = `
        <style>    
            .table__property{

                width: 90%;
                height: auto;
                margin-bottom: 15px;
            
            }

            h3{
                padding: 0
            }

            .title{
            
                border-radius: 15px 15px 0px 0px;
                background-color: #1d1f38;
                color: #ffff;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                border: 1px solid #55588a;
                padding: 5px
            }
            
            .value{
                background-color: #55588a;
                border-radius: 0px 0px 15px 15px;
                color: #ffff;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px
            
            } 
    </style>


    <div class="table__property">
        <div class="title">
            <h3>Founder</h3>
        </div>
        <div class="value">
            <p>Elon Musk</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Founded</h3>
        </div>
        <div class="value">
            <p>2002</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Employees</h3>
        </div>
        <div class="value">
            <p>9500</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>CEO</h3>
        </div>
        <div class="value">
            <p>Elon Musk</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>CTO</h3>
        </div>
        <div class="value">
            <p>Elon Musk</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>COO</h3>
        </div>
        <div class="value">
            <p>Gwynne Shotwell</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>ID</h3>
        </div>
        <div class="value">
            <p>5eb75edc42fea42237d7f3ed</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Vehicles</h3>
        </div>
        <div class="value">
            <p>4</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Launch sites</h3>
        </div>
        <div class="value">
            <p>3</p>
        </div>
    </div>
    `;
}
   