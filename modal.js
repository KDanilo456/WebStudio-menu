// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//     document.body.classList.toggle("no-scroll");
//   }
// })();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove("is-hidden");

    // Трішки почекати і додати клас show, щоб анімація спрацювала
    requestAnimationFrame(() => {
      refs.modal.classList.add("show");
    });

    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    refs.modal.classList.remove("show");

    // Почекати завершення анімації і сховати модалку
    setTimeout(() => {
      refs.modal.classList.add("is-hidden");
    }, 500); // має співпадати з transition
    document.body.classList.remove("no-scroll");
  }
})();

const hamburgerBtn = document.getElementById('hamburgerBtn');
        const menuOverlay = document.getElementById('menuOverlay');
        const mainPage = document.getElementById('mainPage');

        function openMenu() {
            hamburgerBtn.classList.add('active');
            menuOverlay.classList.add('active');
            
            mainPage.style.filter = 'blur(2px)';
        }

        function closeMenu() {
            hamburgerBtn.classList.remove('active');
            menuOverlay.classList.remove('active');
            
            mainPage.style.filter = 'none';
        }

    
        document.addEventListener('click', (e) => {
            if (menuOverlay.classList.contains('active') && 
                !e.target.closest('.menu-overlay') && 
                !e.target.closest('.hamburger-btn')) {
                closeMenu();
            }
        });