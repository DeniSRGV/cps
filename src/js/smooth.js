const smooth = ()=> {
  function scrollSmooth (itemClass){

    document.querySelectorAll(itemClass).forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1),
              scrollTarget = document.getElementById(href),
              topOffset = 0,
              elementPosition = scrollTarget.getBoundingClientRect().top,
              offsetPosition = elementPosition - topOffset;
              window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
              });

      });

    });
  }
  scrollSmooth('.slider__item > a');
  scrollSmooth('.menu__list-item > a');
};
export default smooth;
