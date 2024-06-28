export function updateHeaderTitle(item) {
    const headerTitle = document.getElementById('header__title');
    headerTitle.textContent = item.name;
}

export function updateInformation2() {
    const information2 = document.getElementById('information__2');
    information2.innerHTML = `
        <div class="information__container">
            <div>
                <label>Rocket weight:</label>
                <progress></progress>
            </div>
            <div>
                <span>
                    " "
                    <br>
                    " "
                </span>
            </div>
        </div>
    `;
}

export function updatePagination(data, updatePage) {
    const paginationDiv = document.getElementById('paginacion');
    paginationDiv.innerHTML = ''; 
    for (let i = 1; i <= data.totalPages; i++) {
        const anchor = document.createElement('a');
        anchor.textContent = i;
        anchor.href = '#';
        anchor.addEventListener('click', (event) => {
            event.preventDefault(); 
            updatePage(i);
        });
        paginationDiv.appendChild(anchor);
    }
}