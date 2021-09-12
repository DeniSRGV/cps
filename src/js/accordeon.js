const accordeon = ()=> {
    // const triggerBtn = document.querySelectorAll(trigger),
    //     contentBlock = document.querySelectorAll(content),
      const swiperSubtitle = document.querySelectorAll('.repair__swiper-item__subtitle');
      if (document.documentElement.clientWidth >= 768) {

        swiperSubtitle.forEach(elem => {
          elem.remove();
        });
      }













        };
export default accordeon;
