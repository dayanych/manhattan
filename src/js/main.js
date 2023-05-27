// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  const book = document.querySelector('.nav__book')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active')
      book.classList.add('active')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active')
      book.classList.remove('active')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active')
      book.classList.remove('active')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    if (content[i]) {
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
    }
  }
  hideTabContent();
  showTabContent();
  if (header) {
    header.addEventListener('click', e => {
      const target = e.target;
      if (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }
}
tabs('.poster-tabs__header', '.poster-tabs__header-item', '.poster-tabs__content-item', 'active', 'grid');

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.itcss')) {
    const slider = new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });
    const prevButton = document.querySelector('.btn-prev');
    if (prevButton) {
      prevButton.onclick = () => {
        slider.prev();
      };
    }
    const nextButton = document.querySelector('.btn-next');
    if (nextButton) {
      nextButton.onclick = () => {
        slider.next();
      };
    }
  }
});


const accordions = document.querySelectorAll(".tehrader-accordion__item");
const openAccordion = (accordion) => {
  const content = accordion.querySelector(".tehrader-accordion__content");
  if (content) {
    accordion.classList.add("tehrader-accordion__active");
    content.style.maxHeight = content.scrollHeight + 7 + "px";
  }
};
const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".tehrader-accordion__content");
  if (content) {
    accordion.classList.remove("tehrader-accordion__active");
    content.style.maxHeight = null;
  }
};
accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".tehrader-accordion__intro");
  const content = accordion.querySelector(".tehrader-accordion__content");
  if (intro) {
    intro.onclick = () => {
      if (content && content.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        accordions.forEach((accordion) => closeAccordion(accordion));
        openAccordion(accordion);
      }
    };
  }
});

if (document.querySelector('[data-fancybox="gallery"]')) {
  Fancybox.bind('[data-fancybox="gallery"]', {});
}

function initMap() {
  const location = { lat: 51.51646544345577, lng: -0.12322798361688685 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  map.setOptions({ styles: style });
}

if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
  window.initMap = initMap;
}