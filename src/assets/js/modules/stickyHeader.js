import throttle from 'lodash/throttle'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".header")
        this.events()
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
    }

    runOnScroll() {
        if (window.scrollY > 40) {
            this.siteHeader.classList.add("header-scroll")
        } else {
            this.siteHeader.classList.remove("header-scroll")
        }
    }
}

export default StickyHeader;