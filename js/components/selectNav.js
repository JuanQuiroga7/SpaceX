 export function updateSelectedNavItem(selectedId) {
    const navItems = document.querySelectorAll('li');
    navItems.forEach(item => {
        item.querySelector('a').classList.remove('select');
    });
    const selectedItem = document.getElementById(selectedId);
    if (selectedItem) {
        selectedItem.querySelector('a').classList.add('select');
    }
}