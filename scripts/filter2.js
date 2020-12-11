(function(){
const elem = document.querySelector(".products__list");
const iso = new Isotope(elem, {
    itemSelector: ".products__item",
    filter: '.pop'
});

const controlls = document.querySelectorAll(".filter__item");
const activeClass = "filter__item--active";

controlls.forEach(function(control){
    control.addEventListener("click", function(e) {
        e.preventDefault();
        

        controlls.forEach(function(link) {
            link.closest(".filter__item").classList.remove(activeClass);
        });

        control.closest(".filter__item").classList.add(activeClass);

        const filterName = control.getAttribute("data-filter");
        iso.arrange({
            filter: `.${filterName}`

        });
        console.log(filterName);
    });
});
}());