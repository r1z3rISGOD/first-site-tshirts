(function() {
    var elem = document.querySelector('.products__list');
    var iso = new Isotope( elem, {
      // options
      itemSelector: '.products__item',
      layoutMode: 'fitRows'
    });
}());