 /**
     * gère l'ouverture et la fermeture de la fenetre modale
     */
 function toggleModal(){
    modalContainer.classList.toggle("active");
    if (modalContainer.classList.contains('active')){
        modal.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-modal', 'true');
        document.body.style.overflow='hidden';
        modalContent1();
    }
    else{
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-modal', 'false');
        document.body.style.overflow=null;
    };
};