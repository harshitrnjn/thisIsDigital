

gsap.from(".img1 img", {
    opacity: 0,
    y: 70,
    duration: 1.2
})
gsap.from(".img2 img", {
    opacity: 0,
    x: 70,
    duration: 1.2
})
gsap.from(".img3 img", {
    opacity: 0,
    y: -70,
    duration: 1.2
})
gsap.from("#main>h1", {
    opacity: 0,
    delay: .3,
    duration: 1.5
})
gsap.from(".bttn", {
    opacity: 0,
    delay: .3,
    duration: 1.5
})

gsap.from(".info>h1, .info>h2, .info .about", {
    opacity: 0,
    y:30,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".info",
        scroller: "body",
        start: "top 60%",
        end:"top 65%"

    }
})
gsap.from(".left #imgs", {
    opacity: 0,
    y:30,
    stagger: 0.25,
    scrollTrigger: {
        trigger: ".info2",
        scroller: "body",
        start: "top 70%",
        // end:"top 65%",

    }
})
gsap.from(".right h1, .right h2", {
    opacity: 0,
    y:70,
    delay:.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".info2",
        scroller: "body",
        start: "top 70%",
    }
})
gsap.from(".right .learn img",{
    opacity: 0,
    y:70,
    delay:1.2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".info2",
        scroller: "body",
        start: "top 70%",}
})
gsap.from(".card-one",{
    opacity: 0,
    x:-90,
    duration:1.5,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        start: "top 78%",
        end:"top 85%",
//    markers:true
}
})
gsap.from(".card-two",{
    opacity: 0,
    x:90,
    duration:1.5,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        start: "top 78%",
        end:"top 85%",
    // markers:true
}
})
gsap.from(".abt",{
    opacity: 0,
    y:50,
    // delay:.5,
    duration:1,
    scrollTrigger: {
        trigger: ".c1txt",
        scroller: "body",
        start: "top 70%",
//    markers:tru
}

})
gsap.from(".lastimg",{
    opacity: 0,
    y:50,
    // delay:.5,
    duration:1,
    scrollTrigger: {
        trigger: ".lastimg",
        scroller: "body",
        start: "top 80%",
}

})
//Swipper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
