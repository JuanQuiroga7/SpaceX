export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.name;
}

// Funcion para agregar lsita seccion izquierda
export function updateLeftSideBar(launch_video, static_fire, launch_success, article, wikipedia) {
    const leftSideBar = document.getElementById('description__item');
    let success = '';
    if (launch_success === false) {
        success = 'Negative';
    } else {
        success = 'Afirmative';
    }
    
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
            <i class="bi bi-youtube"></i>
            <p><b>Youtube video: </b> <a href="${launch_video}">See here</a></p>
        </div>
        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Static fire test:   </b> ${static_fire} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-check2-square"></i>
            <p><b>Sucess: </b> ${success} </p>
        </div>
        <div class="item__container">
            <i class="bi bi-paperclip"></i>
            <p><b>Article: </b> <a href="${article}">Click here</a></p>
        </div>
        <div class="item__container">
            <i class="bi bi-wikipedia"></i>
            <p><b>Wikipedia: </b> <a href="${wikipedia}">See wikipedia</a> </p>
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

