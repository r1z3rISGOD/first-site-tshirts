(function(){

    const elem = document.querySelector('.products__list');
    const PopBtn = document.querySelector('.filter__item');
    const NewBtn = document.querySelector('.filter__item--new');
    const BestBtn = document.querySelector('.filter__item--best');
    const SpecBtn = document.querySelector('.filter__item--spec');
    const SoonBtn = document.querySelector('.filter__item--soon');
    const prodFilter = document.querySelector('.filter__item');

    const filterPop = prodFilter.getAttribute("data-filter");
    const filterNew = prodFilter.getAttribute("data-filter");
    const filterBest = prodFilter.getAttribute("data-filter");
    const filterSpec = prodFilter.getAttribute("data-filter");
    const filterSoon = prodFilter.getAttribute("data-filter");
    const iso = new Isotope( elem, {
      // options
      itemSelector: '.products__item',
      filter: '.bestsellers'
    });

    


    PopBtn.addEventListener("click", function(e)  {
        e.preventDefault();
        PopBtn.classList.add('filter__item--active');
        NewBtn.classList.remove('filter__item--active');
        BestBtn.classList.remove('filter__item--active');
        SpecBtn.classList.remove('filter__item--active');
        SoonBtn.classList.remove('filter__item--active');
        
    });
    NewBtn.addEventListener("click", function(e) {
        e.preventDefault();
        PopBtn.classList.remove('filter__item--active');
        NewBtn.classList.add('filter__item--active');
        BestBtn.classList.remove('filter__item--active');
        SpecBtn.classList.remove('filter__item--active');
        SoonBtn.classList.remove('filter__item--active');
        iso.arrange({
            filter: `.${filterNew}`});
    });
    BestBtn.addEventListener("click", function(e) {
        e.preventDefault();
        PopBtn.classList.remove('filter__item--active');
        NewBtn.classList.remove('filter__item--active');
        BestBtn.classList.add('filter__item--active');
        SpecBtn.classList.remove('filter__item--active');
        SoonBtn.classList.remove('filter__item--active');
    });
    SpecBtn.addEventListener("click", function(e) {
        e.preventDefault();
        PopBtn.classList.remove('filter__item--active');
        NewBtn.classList.remove('filter__item--active');
        BestBtn.classList.remove('filter__item--active');
        SpecBtn.classList.add('filter__item--active');
        SoonBtn.classList.remove('filter__item--active');
    });
    SoonBtn.addEventListener("click", function(e) {
        e.preventDefault();
        PopBtn.classList.remove('filter__item--active');
        NewBtn.classList.remove('filter__item--active');
        BestBtn.classList.remove('filter__item--active');
        SpecBtn.classList.remove('filter__item--active');
        SoonBtn.classList.add('filter__item--active');
    });
}());