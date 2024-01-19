var getslide = $(".main-box li").length - 1;

var slidecal = 20 / getslide + "%";

$(".box").css({ width: slidecal });

$(".box").click(function () {
  $(".box").removeClass("active");
  $(this).addClass("active");
});


            



  let onload_mobile_animation_mobile = gsap.timeline();
  onload_mobile_animation_mobile
    .fromTo(
      "#sam_front_mobile",
      { x: 0, y: 0 },
      { x: -100, y: -100, duration: 1 }
    )
   

  let onload_mobile_animation_mobile2 = gsap.timeline();
  onload_mobile_animation_mobile2
    .fromTo("#sam_back_mobile", { x: 0, y: 0 }, { x: 100, y: 100, duration: 1 })
  

  gsap.registerPlugin(ScrollTrigger);
  // Animate/transform/translate/fade the icons
  let iconsTimeline_mobile = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero1_trigger",
      start: "top -10",
      end: "bottom -2000",
      scrub: 1,
      toggleActions: "none play none none",
      onEnter: function () {
        let onload_mobile_animation2 = gsap.timeline();
        onload_mobile_animation2.fromTo(
          "#sam_front_mobile",
          { x: -100, y: -100 },
          { x: -600, y: -600, duration: 2 }
        );

        let onload_mobile_animation22 = gsap.timeline();
        onload_mobile_animation22.fromTo(
          "#sam_back_mobile",
          { x: 100, y: 100 },
          { x: 600, y: 600, duration: 2 }
        );
      },

      onLeave: function () {
        let onload_mobile_animation2 = gsap.timeline();
        onload_mobile_animation2.fromTo(
          "#sam_front_mobile",
          { x: -600, y: -600 },
          { x: -100, y: -100, duration: 2 }
        );

        let onload_mobile_animation22 = gsap.timeline();
        onload_mobile_animation22.fromTo(
          "#sam_back_mobile",
          { x: 600, y: 600 },
          { x: 100, y: 100, duration: 2 }
        );
      },
      pin: true,

      // markers: true,
    },
  });
  iconsTimeline_mobile
    .to("#MAIN_TEXT_mobile", { x:30 })
    .to("#MAIN_TEXT_mobile", { autoAlpha: 1, duration: 1, delay: 0.2 })
    .to("#mrp_price_mobile", { autoAlpha: 1, x:-20, duration: 1, delay: 0.4 })
    .to("#MAIN_TEXT_mobile,#mrp_price_mobile", { y: -100 })
    .to("#red_line_mobile", { autoAlpha: 1 })
    .to("#HAPPI_STORE_mobile", { y: -100, autoAlpha: 1 })
    .to("#SHOP_BTN_mobile", {  transformOrigin: "center", scale:1.8 })
    .to("#SHOP_BTN_mobile", { y: -100, autoAlpha: 1 })
    .fromTo(
      "#DIAMOND_LINES_mobile",
      { y: -150, scale: 0, transformOrigin: "center", autoAlpha: 0 },
      { scale: 0, autoAlpha: 1, duration: 0.2, delay: 8 }
    )


    .to("#cashback-elem-price_mobile", {y:10, x: -68})
    .to("#MRP-elem-price_mobile", { y: -10 })
     .to("#single_upgrade", {y:-5, x: -68 })




    .to(
      "#SHOP_BTN_mobile,#MAIN_TEXT_mobile,#mrp_price_mobile,#mrp_price-2_mobile,#red_line_mobile, #HAPPI_STORE_mobile",
      { autoAlpha: 0, delay: 2 }
    )
    .fromTo(
      "#DIAMOND_LINES_mobile",
      5,
      { scale: 0, transformOrigin: "center" },
      { scale: 150, transformOrigin: "center" }
    )
    
    .to("#sam_front_mobile,#sam_back_mobile", { autoAlpha: 0 })
    .to("#DIAMOND_LINES_mobile", { autoAlpha: 0 })
    .to("#MAIN_TEXT_mobile",{ autoAlpha: 0})
    .fromTo(
      "#SMART_OFFER_dual_mobile",
      5,
      { y: 150, scale: 0, transformOrigin: "center", autoAlpha: 0 },
      { autoAlpha: 1, scale: 1, transformOrigin: "center" }
    )
    

    // .to("#MRP-elem-price_mobile, #cashback-elem-price_mobile, #upgrade_phone-elem-price_mobile",{x:50, y:10})
    // .to("#upgrade_phone-elem-price_mobile",{x:40, y:10})
    
    .fromTo("#SMART_OFFER_dual_mobile", 10, { y: 250 }, { y: -40, delay: 2 })
    .to(
      "#MRP-dual_mobile,#cashback-dual_mobile,#minus-1-dual_mobile,#minus-2-dual_mobile,#upgrade_phone-dual_mobile",
      { autoAlpha: 1, y: -70 }
    )
    .fromTo(
      "#MRP-elem-bg-ele_mobile,#MRP-elem-name1_mobile,#MRP-elem-name2_mobile,#MRP-elem-price_mobile,#minus-1-dual_mobile,#cashback-elem-bg-ele_mobile,#cashback-elem-name1_mobile,#cashback-elem-name2_mobile,#cashback-elem-price_mobile,#minus-2-dual_mobile, #upgrade_phone-elem-bg-ele_mobile,#upgrade_phone-elem-name1_mobile,#upgrade_phone-elem-name2_mobile,#upgrade_phone-elem-price_mobile",
      5,
      { scale: 0.02, transformOrigin: "center", autoAlpha: 1 },
      { scale: 1, transformOrigin: "center", delay: 5 }
    )
    .to("#off1-emiss1,#off1-emiss2",{x:10})
    .to("#offered_price-dual_mobile", { autoAlpha: 1, y: -70 })
    .to("#offered_price_name_mobile", 3, { autoAlpha: 1, delay: 3 })
    .to("#offered_price_price_mobile", 3, { autoAlpha: 1 })
    .to("#offered_price_circle_mobile", 2, { autoAlpha: 1 })
    .to("#CASHBACKTAG2-dual_mobile", { y: -10, x: -200 })
    .to("#CASHBACK-TAG1-dual_mobile", { y: -10, x: 200 })
    .to("#CASHBACKTAG2-dual_mobile", 1, { autoAlpha: 1 })
    .to("#CASHBACKTAG2-dual_mobile, #CASHBACK-TAG1-dual_mobile", 0.7, { autoAlpha: 1, x: 0,})
    // .to("#back_strip_9months", 3, { autoAlpha: 1, y: -70,x: 0,delay:2 })
    .to("#frount_strip_9months,#text_9months_main", 1, { autoAlpha: 1, x: 0,delay:0.5 })
    .to("#frount_strip_9months,#text_9months_main", 0.6, { autoAlpha: 1});
    
    // .to(".near-by-store h1", 2, { autoAlpha: 1, delay: 1 });


  


    let iconsTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-second-offer",
        scrub: 3,
        toggleActions: "none play none none",
         start:"top 800",
         end:"bottom",
        //  markers: true,
      },
    });
    iconsTimeline2
    .to(".near-by-store h1",2, { delay:2 })
    .fromTo(
      "#BG_24months, #lines_24months, #cost_24months-2, #nocBG_24months,#nocname_24months,#announce_24months",1,
      { autoAlpha:0,x:250, scale: 3, transformOrigin: "center"},
      { autoAlpha:1,scale: 1, transformOrigin: "center",delay:2}
    )
    .to("#cost_4_814_BG, #cost_4_814,#PERDAY_BG, #PERDAY, #PERDAY_162,#PERMONTHEMI_BG,#PERMONTHEMI, #arrow2, #arrow1, #dots2, #dots1", {x:-250})
    .fromTo("#mobile", {autoAlpha:0,x:250,y:200},{ autoAlpha:1,y: 50})
     
    .to("#mobile, #cost_4_814_BG, #cost_4_814,#PERDAY_BG, #PERDAY, #PERDAY_162,#PERMONTHEMI_BG,#PERMONTHEMI, #arrow2, #arrow1, #dots2, #dots1,#BG_24months, #lines_24months, #cost_24months-2, #nocBG_24months,#nocname_24months,#announce_24months",1, {autoAlpha:1, x:-0})
    .to(".mobile",1, { autoAlpha: 1, delay: 1 })
    .to(".near-by-store h1", { autoAlpha: 1 })
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



    // let two_hundred_mp = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#two-hundred-trigger",
    //     start: "top",
    //     end: "bottom",
    //     scrub: 5,
    //     //  markers:true,
    //   },
    // });
    // two_hundred_mp.fromTo("#two-hundred-mp", 5,
    //   { scale: 20, transformOrigin: "center", autoAlpha: 0 },
    //   { autoAlpha: 1, scale: 1, transformOrigin: "center" }
    // );
    
    // let two_hundred_mp_part2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#two-hundred-trigger-part2",
    //     start: "top",
    //     end: "bottom",
    //     scrub: 5,
    //     //  markers:true,
    //   },
    // });
    // two_hundred_mp_part2.fromTo(
    //   "#Wow-worthy_resolution",
    //   4,
    //   { y: -80, autoAlpha: 0 },
    //   { autoAlpha: 1, y: -20, delay: 10 }
    // );






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

let costs = [61999, 61499, 60999, 60499, 59999, 59499];
let emi = [6889, 6833, 6777, 6721, 6665, 6609];
let emi_day = [230, 228, 226, 224, 222, 220];
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




let costs2 = [66999, 66499, 65999, 65499, 64999, 64499];
let emi2 = [2792, 2771, 2750, 2729, 2709, 2688];
let emi2_day = [93, 92, 91, 90, 89, 88];
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
        delay:0.001
      },
      start:"top top",
      end:"400%"
  },
  // markers:true
});















