class MobileMenu{
    constructor() {
        this.menuIcon = document.querySelector(".menu-dropdown")
        this.menuNav = document.querySelector(".mobil-header-popup")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu())
    }

    toggleMenu() {
        this.menuNav.classList.toggle("is-visible")
        this.menuIcon.classList.toggle("close")
    }
}

export default MobileMenu;