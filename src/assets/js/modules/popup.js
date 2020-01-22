class Popup{
    constructor() {
        this.footerPopupBtn = document.querySelector(".footer__popup__btn")
        this.footerPopup = document.querySelector(".footer__popup")
        this.events()
    }

    events() {
        this.footerPopupBtn.addEventListener("click", () => this.togglePopup())
    }

    togglePopup() {
        this.footerPopupBtn.classList.add("close")
        this.footerPopup.classList.add("is-open")
    }
}

export default Popup;