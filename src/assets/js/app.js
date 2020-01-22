// import RevealOnScroll from './modules/RevealOnScroll'
import MobilMenu from './modules/mobilMenu'
// import Popup from './modules/popup'
import StickyHeader from './modules/stickyHeader'
import Glide from '@glidejs/glide'
import 'alpinejs'
// import Swup from 'swup';


// new Popup();
let mobiMenu = new MobilMenu();
let stickyHeader = new StickyHeader();

// new RevealOnScroll(document.querySelectorAll(".reveal"), 85)

var blogSlider = new Glide('#blog-slider', {
    type: 'carousel',
    perView: 4,
    navigation: true,
    gap: 30,
    breakpoints: {
      1200: {
        perView: 3
      },
      992: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })

blogSlider.mount()

// const swup = new Swup();