(function() {
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    
    
    openingBtn.addEventListener("click", openMenu);
    
    function openMenu() {
        sidebar.classList.add('sidebar--opened');
    }
    
    
    closingBtn.addEventListener("click", closeMenu);
    
    function closeMenu() {
        sidebar.classList.remove('sidebar--opened');
    }
}());
