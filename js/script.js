                    //SWIPER JS INITIALIZE
                    var swiper = new Swiper(".mySwiper", {
                        slidesPerView: 1,
                        loop: true,
                        // grabCursor:true,
                        pagination: {
                          el: ".swiper-pagination",
                          clickable: true,
                        },
                        autoplay: {
                            delay:  3000,
                            disableOnInteraction: false,

                        },
                        navigation: {
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        },
                      });

                    // NAV OPEN AND  CLOSE

// const body = document.querySelector('.body'),
//             navMenu = body.querySelector('.menu-content'),
//             navCloseBtn = navMenu.querySelector('.navClose-btn') 

const   body       =    document.querySelector('body')
const  navOpen = document.getElementById('navOpen') 
const  navClose = document.getElementById('navClose') 
const  navMenu = document.getElementById('menuContent') 

if ( navOpen    &&      navClose){
    navOpen.addEventListener('click', ()=>  {
        navMenu.classList.add('open')
        body.style.overflowY = "hidden"
    })
}

if ( navOpen    &&      navClose){
    navClose.addEventListener('click', ()=>  {
        navMenu.classList.remove('open')
        body.style.overflowY = "scroll"
    })
}

    // NAVBAR ON SCROLL 
   
    const  backToTopIcon = document.querySelector(" .bactToTop-icon")
    var className = "inverted";
    var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
    backToTopIcon.style.opacity = 1
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    backToTopIcon.style.opacity = 0
  }

  // AcTIVE NAV

  const  sections = document.querySelectorAll("section[id]")
  sections.forEach(section=> {
              
              let scrollTop = section.offsetTop -80
              let scrollHeight = section.offsetHeight
             let  navId = document.querySelector(`.menu-content a[href*=${section.id}]`)
             
             if(window.scrollY > scrollTop && window.scrollY <= scrollHeight + scrollTop){
               navId.classList.add("active-navlink")
               
              }else{
             navId.classList.remove("active-navlink")
              }
              navId.addEventListener("click", ()=>{
                navMenu.classList.remove('open')
                body.style.overflowY = "scroll"
              })
  });
};



// SCROLL REVEAL ANIMATIONS

const sr = ScrollReveal({
  origin: 'top',
  distance:'30px' ,
  duration: 2000,
  delay: 100,
})

sr.reveal('.section-title, .section-subtitle, .section-decription,  .brand-img , .review-subtitle,  .footer-content',{interval:16,reset: true})
sr.reveal('.about-details, .menu-table', {origin:'right', reset: true})
sr.reveal('.about-imagecontent, .menu-items', {origin:'left' ,reset: true})
