var getslide = $(".main-box li").length - 1;

var slidecal = 20 / getslide + "%";

$(".box").css({ width: slidecal });

$(".box").click(function () {
  $(".box").removeClass("active");
  $(this).addClass("active");
});


// Hero Animation


  let onload_mobile_animation = gsap.timeline();
  onload_mobile_animation.fromTo(
    "#sam_front",
    { x: 0, y: 0 },
    { x: -100, y: -100, duration: 1 }
  );

  let onload_mobile_animation2 = gsap.timeline();
  onload_mobile_animation2.fromTo(
    "#sam_back",
    { x: 0, y: 0 },
    { x: 100, y: 100, duration: 1 }
  );

  let onload_two_hundred_mp = gsap.timeline();

  onload_two_hundred_mp.to("#two-hundred-mp", {
    scale: 80,
    transformOrigin: "center",
  });

  gsap.registerPlugin(ScrollTrigger);
  
  // Animate/transform/translate/fade the icons
  let iconsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero1_trigger",
      start: "top -10",
      end: "bottom -2000",
      scrub: 3,
      toggleActions: "none play none none",
      onEnter: function () {
        let onload_mobile_animation2 = gsap.timeline();
        onload_mobile_animation2.fromTo(
          "#sam_front",
          { x: -100, y: -100 },
          { x: -600, y: -600, duration: 2 }
        );

        let onload_mobile_animation22 = gsap.timeline();
        onload_mobile_animation22.fromTo(
          "#sam_back",
          { x: 100, y: 100 },
          { x: 600, y: 600, duration: 2 }
        );
      },

      onLeave: function () {
        let onload_mobile_animation2 = gsap.timeline();
        onload_mobile_animation2.fromTo(
          "#sam_front",
          { x: -600, y: -600 },
          { x: -100, y: -100, duration: 2 }
        );

        let onload_mobile_animation22 = gsap.timeline();
        onload_mobile_animation22.fromTo(
          "#sam_back",
          { x: 600, y: 600 },
          { x: 100, y: 100, duration: 2 }
        );
      },
      pin: true,
      // markers: true,
    },
  });




  
  iconsTimeline
    .to("#MAIN_TEXT", { y: -50, autoAlpha: 1, duration: 1, delay: 5 })
    .to("#mrp_price", { y: -50,x:-15, autoAlpha: 1, duration: 0.5 })
    .to("#MAIN_TEXT", { y: -100,x:-60, delay: 10 })
    .to("#mrp_price", { y: -100 })
    .to("#SHOP_BTN", {  transformOrigin: "center", scale:1.5 })
    .to("#red_line", { autoAlpha: 1 })
    .to("#HAPPI_STORE", { y: -100, autoAlpha: 1, delay: 22 })
    .to("#SHOP_BTN", { y: -100,  autoAlpha: 1, delay: 24 })
    
     .to("#cashback-elem-price-22,#cashback-elem-price-33", { y:12 ,x: -60 })
    .to("#MRP-elem-price", { y: -28 })
     .to("#single_upgrade", {y:-5, x: -68 })
     
    .fromTo(
      "#DIAMOND_LINES",
      { y: -150, scale: 0, transformOrigin: "center", autoAlpha: 0 },
      { scale: 0, autoAlpha: 1, duration: 0.2, delay: 26 }
    )

    
    .to(
      "#SHOP_BTN,#MAIN_TEXT,#mrp_price,#mrp_price-2,#red_line, #HAPPI_STORE",
      { autoAlpha: 0, delay: 28 }
    )
    .to("#sam_front,#sam_back", { autoAlpha: 0 })
    .fromTo(
      "#DIAMOND_LINES",
      30,
      { scale: 0.02, transformOrigin: "center" },
      { scale: 150, transformOrigin: "center" }
    )

    .fromTo(
      "#SMART_OFFER_dual",
      20,
      { y: 150, scale: 0, transformOrigin: "center", autoAlpha: 0 },
      { autoAlpha: 1, scale: 1, transformOrigin: "center" }
    )
    .to("#DIAMOND_LINES", { autoAlpha: 0 })
    .fromTo("#SMART_OFFER_dual", 10, { y: 250 }, { y: -40, delay: 5 })
    .to("#MRP-dual,#cashback-dual,#minus-1-dual,#minus-2-dual,#upgrade_phone-dual", { autoAlpha: 1, y: -70 })
    
    .fromTo(
      "#MRP-elem-bg-ele,#MRP-elem-name1,#MRP-elem-name2,#MRP-elem-price,#minus-1-dual,#cashback-elem-bg-ele,#cashback-elem-name1,#cashback-elem-name2,#cashback-elem-price,#minus-2-dual, #upgrade_phone-elem-bg-ele,#upgrade_phone-elem-name1,#upgrade_phone-elem-name2,#upgrade_phone-elem-price",
      30,
      { scale: 0.02, transformOrigin: "center", autoAlpha: 1 },
      { scale: 1, transformOrigin: "center", delay: 10 }
    )
    // .to("#cashback-elem-price, #upgrade_phone-elem-price", {y:10, x: -80})
    .fromTo(
      "#MRP-elem-bg-ele,#MRP-elem-name1,#MRP-elem-name2,#MRP-elem-price,#minus-1-dual,#cashback-elem-bg-ele,#cashback-elem-name1,#cashback-elem-name2,#cashback-elem-price,#minus-2-dual, #upgrade_phone-elem-bg-ele,#upgrade_phone-elem-name1,#upgrade_phone-elem-name2,#upgrade_phone-elem-price",
      10,
      { x: 300 },
      { x: 0, delay: 3 }
    )
    

    .to("#equals-dual", { y: -70, autoAlpha: 1, delay: 3 })
    .to("#offered_price-dual", { y: -70 })
    .to("#offered_price_name", 3, { autoAlpha: 1, delay: 5 })
    .to("#offered_price_price", 3, { autoAlpha: 1 })
    .to("#offered_price_circle", 2, { autoAlpha: 1 })
    .to("#CASHBACKTAG2-dual", { y: -70, x: -200 })
    .to("#CASHBACK-TAG1-dual", { y: -70, x: 200 })
    .to("#back_strip_9months", { y: -60 })
    .to("#frount_strip_9months", { y: -70 })
    .to("#text_9months_main", { y: -73, x:18 })
    .to("#CASHBACKTAG2-dual", 2, { autoAlpha: 1, delay: 5 })
    .to("#CASHBACKTAG2-dual,#CASHBACK-TAG1-dual", 2, { autoAlpha: 1, x: 0 })
    
    .to("#back_strip_9months,#frount_strip_9months,#text_9months_main", 1, { autoAlpha: 1, y: -70,x: 0,delay:2 })
    .to("#text_9months_main", { x: 20 })

    // .to("#CASHBACKTAG2-dual,#CASHBACK-TAG1-dual", 2, { autoAlpha: 0})
      
  
    




    let iconsTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-second-offer",
        scrub: 3,
        toggleActions: "none play none none",
         start:"top 100",
         end:"bottom",
        //  markers: true,
      },
    });
    iconsTimeline2
    
    .fromTo(
      "#BG_24months, #lines_24months, #cost_24months-2, #nocBG_24months,#nocname_24months,#announce_24months",1,
      { autoAlpha:0,x:250, scale: 3, transformOrigin: "center"},
      { autoAlpha:1,scale: 1, transformOrigin: "center",delay:2}
    )
    // .to("#CASHBACKTAG2-dual,#CASHBACK-TAG1-dual,#back_strip_9months,#frount_strip_9months,#text_9months_main", { autoAlpha: 0})
    .to("#cost_4_814_BG, #cost_4_814,#PERDAY_BG, #PERDAY, #PERDAY_162,#PERMONTHEMI_BG,#PERMONTHEMI, #arrow2, #arrow1, #dots2, #dots1", {x:-250})
    .fromTo("#mobile", {autoAlpha:0,x:250,y:200},{ autoAlpha:1,y: 50})
    // .to(".near-by-store h1", { autoAlpha: 0 })
    .to("#mobile, #cost_4_814_BG, #cost_4_814,#PERDAY_BG, #PERDAY, #PERDAY_162,#PERMONTHEMI_BG,#PERMONTHEMI, #arrow2, #arrow1, #dots2, #dots1,#BG_24months, #lines_24months, #cost_24months-2, #nocBG_24months,#nocname_24months,#announce_24months",0.5, {autoAlpha:1, x:-0})
    
    
    .to(".near-by-store h1",1, { autoAlpha: 1, delay: 1 })
    
    .to("#YOUR_DETAILS",1, { autoAlpha: 1, delay: 1 })
    .to("#YOUR_DETAILS",4, { autoAlpha: 1, delay: 1 });
    

let Nitography_cemara_action_timeline_effect = gsap.timeline({
  scrollTrigger: {
    trigger: "#two-hundred-trigger",
    start: "top",
    end: "bottom",
    scrub: 5,
    // markers: true
  },
});

Nitography_cemara_action_timeline_effect.fromTo("#spec-camera-text,#spec-camera-heading", 10,
  { scale: 20, transformOrigin: "center", autoAlpha: 0 },{ autoAlpha: 1, scale: 1, transformOrigin: "center" ,delay:1})
.to("#spec-camera-pera", 0.3, { autoAlpha: 1, scale: 1, transformOrigin: "center",delay:1} )
.fromTo("#Main-cam-pic", 0.7, { autoAlpha: 0, y:-40},{ autoAlpha: 1, y:0,delay:2} )
.fromTo("#Cam_10MP,#Cam_50MP,#Cam_12MP,#Cam_12MP_front", 2, {autoAlpha: 0, yPercent:100}, {autoAlpha: 1, duration: 0.5, yPercent:0,delay:5})
;



function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    let rs_current =
      current.toLocaleString("en-IN") + "*";
    obj.innerHTML = rs_current;

    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

let costs = [81999, 81499, 80999, 80499, 79999, 79499];
let emi = [9111, 9055, 8999, 8943, 8887, 8831];
let emi_day = [304, 302, 300, 298, 296, 294];
let index = 0;



setInterval(function () {
  if (index <= costs.length - 1 && index <= emi.length - 1) {
    animateValue("my_text_cost", costs[index], costs[index]- 500, 3000);
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
     animateValue("my_text_emi", emi[index], emi[index]-56, 3000);
    // animateValue("my_text_emi_mobile", emi[index] + 500, emi[index], 2000);
    animateValue("my_text_emi_days", emi_day[index], emi_day[index]-2, 3000);
    index++;
  } else {
    index = 0;
    animateValue("my_text_cost", costs[index], costs[index]- 500, 3000);
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
     animateValue("my_text_emi", emi[index], emi[index]-56, 3000);
    // animateValue("my_text_emi_mobile", emi[index] + 500, emi[index], 2000);
    animateValue("my_text_emi_days", emi_day[index], emi_day[index]-2, 3000);
    index++;
  }
}, 6000);




let costs2 = [86999, 86499, 85999, 85499, 84999, 84499];
let emi2 = [3625, 3604, 3583, 3562, 3541, 3520];
let emi2_day = [121, 120, 119, 118, 117, 116];
let index2 = 0;

setInterval(function () {
  if (index2 <= costs2.length - 1 && index2 <= emi2.length - 1) {
    animateValue("my_text_cost2", costs2[index2], costs2[index2]-500, 3000);
    
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
    
    animateValue("my_text_emi2", emi2[index2], emi2[index2]-21, 3000);
    // animateValue("my_text_emi_mobile", emi[index] + 500, emi[index], 2000);
    animateValue("my_text_emi2_day", emi2_day[index2], emi2_day[index2]-1, 3000);
    
    index2++;
  } else {
    index2 = 0;
    animateValue("my_text_cost2", costs2[index2], costs2[index2]-500, 3000);
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
    
    animateValue("my_text_emi2", emi2[index2], emi2[index2]-21, 3000);
    // animateValue("my_text_emi_mobile", emi[index] + 500, emi[index], 2000);
     animateValue("my_text_emi2_day", emi2_day[index2], emi2_day[index2]-1, 3000);

    index2++;
  }
}, 6000);






let  images_effect_trigger_ss55 = gsap.timeline();

      let sections = gsap.utils.toArray(".panel");

      images_effect_trigger_ss55.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".containers",
            pin: true,
            scrub: 1,
            snap:{
              snapTo: 1 / (sections.length - 1),
              duration:0.01,
              delay:0.0002
            },
            start:"top top",
            end:"400%"
        },
        
    });


   