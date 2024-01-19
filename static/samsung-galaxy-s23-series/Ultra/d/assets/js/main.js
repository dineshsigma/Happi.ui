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
    .to("#mrp_price", { y: -50, autoAlpha: 1, duration: 0.5 })
    .to("#MAIN_TEXT", { y: -100, delay: 10 })
    .to("#mrp_price", { y: -100 })
    .to("#SHOP_BTN", {  transformOrigin: "center", scale:1.5 })
    .to("#red_line", { autoAlpha: 1 })
    .to("#HAPPI_STORE", { y: -100, autoAlpha: 1, delay: 22 })
    .to("#SHOP_BTN", { y: -100,  autoAlpha: 1, delay: 24 })
    

    // .to("#MRP-elem-price", { y: -15 })
    // .to("#single_upgrade", { y: -20 })
    // .to("#cashback-elem-price", { y: -15 })
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
      { x: 300, scale: 0.02, transformOrigin: "center", autoAlpha: 1 },
      { scale: 1, transformOrigin: "center", delay: 10 }
    )
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
    .to("#text_9months_main", { x: 20 });
    
   

    




  


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
        trigger: "#Nitography_cemara_action_trigger",
        start: "top",
        end: "bottom",
        scrub: 5,
        // markers: true,
      },
    });
    Nitography_cemara_action_timeline_effect.fromTo("#Nitography_cemara_action", 3,
      { scale: 10, transformOrigin: "center", autoAlpha: 0 },
      { autoAlpha: 1, scale: 1, transformOrigin: "center" }
    );




let two_hundred_mp = gsap.timeline({
  scrollTrigger: {
    trigger: "#two-hundred-trigger",
    start: "top",
    end: "bottom",
    scrub: 5,
    //  markers:true,
  },
});
two_hundred_mp.fromTo("#two-hundred-mp", 5,
  { scale: 20, transformOrigin: "center", autoAlpha: 0 },
  { autoAlpha: 1, scale: 1, transformOrigin: "center" }
);

let two_hundred_mp_part2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#two-hundred-trigger-part2",
    start: "top",
    end: "bottom",
    scrub: 5,
    //  markers:true,
  },
});
two_hundred_mp_part2.fromTo(
  "#Wow-worthy_resolution",
  4,
  { y: -80, autoAlpha: 0 },
  { autoAlpha: 1, y: -20, delay: 10 }
);






// document.getElementById("mask_layer").style.visibility="hidden";


      // for(let sam1=1; sam1<=9; sam1++ )
      // {
      //   document.getElementById("all_video_mix000"+sam1+"_Image").style.visibility="hidden"; 
      // }

      // for(let sam2=10; sam2<=99; sam2++ )
      // {
      //   document.getElementById("all_video_mix00"+sam2+"_Image").style.visibility="hidden";
      // }

      // for(let sam3=100; sam3<=210; sam3++ )
      // {
      //   document.getElementById("all_video_mix0"+sam3+"_Image").style.visibility="hidden";
      // }



      


// Animate/transform/translate/fade the icons
// let  images_effect_trigger_ss = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#video_animation_trigge_sample",
//     start: "top 30",
//     end: "bottom -7000",
//     scrub: 1,
//     toggleActions: "none play none none",
//     pin: true,
//     markers: true
//   },
// });


// let main_sam1;
// images_effect_trigger_ss.to("#nightography_camera", { x:600 });
// images_effect_trigger_ss.to("#nightography_camera", { autoAlpha:1,x:0, duration:10});





// var imgsrc = document.querySelector("#my_image_no");     

//   for(main_sam1=1; main_sam1<=9; main_sam1++ )
//   {
//     images_effect_trigger_ss.add( function(){ imgsrc.src='assets/red/all video mix00'+main_sam1+'.jpg'; });
//   }
  // for(main_sam1=10; main_sam1<=64; main_sam1++ )
  // {
  //   images_effect_trigger_ss.add( function(){ imgsrc.src='assets/red/all video mix00'+main_sam1+'.jpg'; });
  // }




  // images_effect_trigger_ss.to("#all_video_mix0065_Image", { autoAlpha:1 ,delay:20});
  
  
  // images_effect_trigger_ss.to("#nightography_camera", { x:-600 });
  // images_effect_trigger_ss.to("#nightography_camera", { autoAlpha:0});

  // images_effect_trigger_ss.to("#High_resolutiobn_photo", { x:600 });
  // images_effect_trigger_ss.to("#High_resolutiobn_photo", { autoAlpha:1,x:0,duration:10});
 
  // for(main_sam1=66; main_sam1<=99; main_sam1++ )
  // {
  //   images_effect_trigger_ss.to("#all_video_mix00"+main_sam1+"_Image", { autoAlpha:1 });
  // }
  // for(main_sam1=100; main_sam1<=114; main_sam1++ )
  // {
  //   images_effect_trigger_ss.to("#all_video_mix0"+main_sam1+"_Image", { autoAlpha:1});
  // }




  // images_effect_trigger_ss.to("#all_video_mix0115_Image", { autoAlpha:1 ,delay:20});

  // images_effect_trigger_ss.to("#High_resolutiobn_photo", { x:-600 });
  // images_effect_trigger_ss.to("#High_resolutiobn_photo", { autoAlpha:0});

  // images_effect_trigger_ss.to("#Vision_Booster", { x:600 });
  // images_effect_trigger_ss.to("#Vision_Booster", { autoAlpha:1,x:0,duration:10});
  
  // for(main_sam1=116; main_sam1<=142; main_sam1++ )
  // {
  //   images_effect_trigger_ss.to("#all_video_mix0"+main_sam1+"_Image", { autoAlpha:1});
  // }

  


  // images_effect_trigger_ss.to("#all_video_mix0143_Image", { autoAlpha:1 ,delay:20});

  // images_effect_trigger_ss.to("#Vision_Booster", { x:-600 });
  // images_effect_trigger_ss.to("#Vision_Booster", { autoAlpha:0});

  // images_effect_trigger_ss.to("#processors", { x:600 });
  // images_effect_trigger_ss.to("#processors", { autoAlpha:1,x:0,duration:10});

  // for(main_sam1=144; main_sam1<=190; main_sam1++ )
  // {
  //   images_effect_trigger_ss.to("#all_video_mix0"+main_sam1+"_Image", { autoAlpha:1, delay:1});
  // }



  
  // images_effect_trigger_ss.to("#all_video_mix0191_Image", { autoAlpha:1 ,delay:20});

  // images_effect_trigger_ss.to("#processors", { x:-600 });
  // images_effect_trigger_ss.to("#processors", { autoAlpha:0});

  // images_effect_trigger_ss.to("#S_PEN", { x:600 });
  // images_effect_trigger_ss.to("#S_PEN", { autoAlpha:1,x:0,duration:10});
  
  // for(main_sam1=192; main_sam1<=209; main_sam1++ )
  // {
  //   images_effect_trigger_ss.to("#all_video_mix0"+main_sam1+"_Image", { autoAlpha:1});
  // }
  // images_effect_trigger_ss.to("#all_video_mix0210_Image", { autoAlpha:1 ,delay:20});


// let s_pen_layer_timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".my-pen-section",
//     start: "top",
//     end: "bottom",
//     scrub: 3,
//     markers: true
//   },
// });
// s_pen_layer_timeline.fromTo("#s_pen_layer",4,{ x: 0, y: 0 },{ x: -110, y: 140, delay: 15 });



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

let costs = [106999, 106499, 105999, 105499, 104999, 104499];
let emi = [11888, 11833, 11778, 11723, 11668, 11613];
let emi_day = [396, 394, 392, 390, 388, 386];
let index = 0;



setInterval(function () {
  if (index <= costs.length - 1 && index <= emi.length - 1) {
    animateValue("my_text_cost", costs[index], costs[index]- 500, 3000);
    
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
    
     animateValue("my_text_emi", emi[index], emi[index]-55, 3000);
    // animateValue("my_text_emi_mobile", emi[index] + 500, emi[index], 2000);

    animateValue("my_text_emi_day", emi_day[index], emi_day[index]-2, 3000);
    
    index++;
  } else {
    index = 0;
    animateValue("my_text_cost", costs[index], costs[index]- 500, 3000);
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
    
     animateValue("my_text_emi", emi[index], emi[index]-55, 3000);
    // animateValue("my_text_emi_mobile", emi[index] + 500, emi[index], 2000);
    animateValue("my_text_emi_day", emi_day[index], emi_day[index]-2, 3000);

    index++;
  }
}, 6000);




let costs2 = [116999, 116499, 115999, 115499, 114999, 114499];
let emi2 = [4874, 4854, 4834, 4814, 4794, 4774];
let emi2_day = [163, 162, 161, 160, 159, 158];
let index2 = 0;

setInterval(function () {
  if (index2 <= costs2.length - 1 && index2 <= emi2.length - 1) {
    animateValue("my_text_cost2", costs2[index2], costs2[index2]-500, 3000);
    
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
    
    animateValue("my_text_emi2", emi2[index2], emi2[index2]-20, 3000);
    // animateValue("my_text_emi_mobile", emi[index] + 500, emi[index], 2000);
    animateValue("my_text_emi2_day", emi2_day[index2], emi2_day[index2]-1, 3000);
    
    index2++;
  } else {
    index2 = 0;
    animateValue("my_text_cost2", costs2[index2], costs2[index2]-500, 3000);
    // animateValue("my_text_cost_mobile", costs[index], costs[index] - 500, 2000);
    
    animateValue("my_text_emi2", emi2[index2], emi2[index2]-20, 3000);
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
              duration:0.001,
 delay:0.1
            },
            start:"top top",
            end:"500%"
        },
        
    });


   