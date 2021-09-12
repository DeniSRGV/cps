
const modals = ()=> {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          modalContent = document.querySelectorAll('.modal__feedback '),
          close = document.querySelectorAll(closeSelector);

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = "block";
            modal.classList.add('fadein');
            document.body.style.overflow = "hidden";
            modalContent.forEach(item => {
              item.classList.remove('fade-out-right');
            });

        });
    });
    function closeModal (){

      modalContent.forEach(item => {
        item.classList.add('fade-out-right');
      });
        setTimeout(function(){
          modal.style.display = "none";
          document.body.style.overflow = "";
          modal.classList.remove('fadein');
        },1000);
    }

    close.forEach(elem => {
      elem.addEventListener('click', () => {
        closeModal();
    });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.style.display == "block") {
          closeModal();
      }
  });
}



bindModal('[data-form]', '[data-modal_callback]','.modal__close');

bindModal('[data-callback]', '[data-modal_feedback]','.modal__close');


};
export default modals;
