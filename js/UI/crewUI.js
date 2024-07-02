export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.name;
}

// Funcion para agregar tabla seccion izquiera en el DOM
export function updateTableLeft(member_agency, member_launches) {
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
                <h3>Agency</h3>
            </div>
            <div class="value">
                <p>${member_agency}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Launches</h3>
            </div>
            <div class="value">
                <p>${member_launches}</p>
            </div>
        </div>
    </div>
    `;
}

// Funcion para agregar data en centro de la pagina
export function updateCentralData(wikipedia, image){
    const centralData = document.getElementById('section__image');
    centralData.innerHTML = `
        <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                color: var(--color--five)
            }

            #section__image{

                gap: 10px;
                margin-top: 90px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            
            .wikipedia__bx{
                
                margin-top: 20px;
                width: 100%;
                border: 1px solid #55588a;
                border-radius: 10px;
            }
            
            .title__wikipedia{
                gap: 5px;
                display: flex;
                justify-content: center;
                background-color: #1d1f38;
                padding: 5px;
                border-radius: 10px 10px 0px 0px;
                width: 100%
                
            }

            h2{
                font-size: 20px;
            }

            i{
                font-size: 20px;
            }
            
            .value__wikipedia{
                display: flex;
                justify-content: center;
                padding: 7px;
            }
    </style>
    <div class="wikipedia__bx">
    <div class="title__wikipedia">
        <i class="bi bi-wikipedia"></i>
        <h2>Wikipedia</h2>
    </div>
    <div class="value__wikipedia">
        <a href="${wikipedia}">Click here for more information</a>
    </div>
    </div>
    <img style="width: auto; height: 300px;" src="${image}" referrerpolicy="no-referrer" alt="">
    `;
}

// Funcion para agregar tabla seccion derecha en el DOM
export function updateTableRight(member_status, member_id) {
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
                <h3>Member status</h3>
            </div>
            <div class="value">
                <p>${member_status}</p>
            </div>
        </div>
        <div class="table__property">
            <div class="title">
                <h3>Member ID</h3>
            </div>
            <div class="value">
                <p>${member_id}</p>
            </div>
        </div>
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