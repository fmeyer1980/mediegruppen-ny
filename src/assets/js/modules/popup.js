class Popup{
    constructor() {
        this.footerPopupBtn = document.querySelector(".popup-button")
        this.footerPopupClose = document.querySelector(".footer__popup__close")
        this.footerPopup = document.querySelector(".footer__popup")
        this.events()
    }

    events() {
        this.footerPopupBtn.addEventListener("click", () => this.openPopup())
        this.footerPopupClose.addEventListener("click", () => this.closePopup())
    }

    openPopup() {
        this.footerPopup.classList.add("is-open")
    }

    closePopup() {
        this.footerPopup.classList.remove("is-open")
    }
}

export default Popup;