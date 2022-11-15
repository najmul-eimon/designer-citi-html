$(function () {
  "use strict";

  /*======================== related-product-slider ===========================*/
  var swiperRelated = new Swiper(".related-product-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    slidesPerGroup: 1,
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  $(".related-product-slider").mouseenter(function(){
    swiperRelated.autoplay.stop();
  });

  $(".related-product-slider").mouseleave(function(){
    swiperRelated.autoplay.start();
  });

  /*======================== mobile menu and bottom navigation ===========================*/
  $(".mobile_menu a, .mobile_top_bar a, .cus_menu a ").click(function () {
    var mobile_menu_content_name = $(this).attr("data-action");

    // If go to home then scroll is available -----------
    if (mobile_menu_content_name == "home") {
      $(".mobile_menu_closer").hide();
      $("body").removeClass("body_scroll_lock");
    } else {
      $("body").addClass("body_scroll_lock");
      $(".mobile_menu_closer").show();
    }

    // If go to home then scroll is available -----------
    $(".mobile_menu_content").removeClass("mobile_content_switch");

    $("." + mobile_menu_content_name).toggleClass("mobile_content_switch");

    //Activing color
    $(".mobile_menu a, .mobile_top_bar a ").removeClass("mob_menu_item_active");
    $(this).addClass("mob_menu_item_active");
  });

  /*============================ mobile product page filter action ================================*/
  $(".filter-btn").click(function () {
    $(".filter-action").addClass("show-filters");
    $("body").addClass("body_scroll_lock");
  });
  $(".filter-panel-btn").click(function () {
    $(".filter-action").removeClass("show-filters");
    $("body").removeClass("body_scroll_lock");
  });

  /*============================ mobile menu closer ==============================*/

  $(".mobile_menu_closer a").click(function () {
    $(".mobile_menu_closer").hide();
  });

  /*========================== all category show/hide ==============================*/
  $(".category-btn").on("click", function () {
    $(".all-categories").slideToggle(600);
  });

  /*============================ add to fav icon =============================*/
  $(".add-to-fav").on("click", function () {
    $(this).toggleClass("active");
  });

  /*============================= banner slider ==============================*/

  var swiperBanner = new Swiper(".banner-slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".banner-btn-next",
      prevEl: ".banner-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=========================== filter button ===============================*/
  let filterBtn = document.querySelector(".filter-price-btn");
  let item1 = document.querySelector(".filter-item1");
  let item2 = document.querySelector(".filter-item2");

  $(".filter-item1").on("click", function () {
    filterBtn.innerText = item1.innerHTML;
  });
  $(".filter-item2").on("click", function () {
    filterBtn.innerText = item2.innerHTML;
  });

  /*========================== product detail modal ===========================*/
  $(".product-image").click(function () {
    $("#product_modal").modal("show");
  });
  

  /*============================ product detail description slider ==============================*/
  var swiperProdDesc = new Swiper(".product-desc-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  /*============================= single product add to cart counter ============================*/
  // Script for product counter buttons
  $(".static_btn").click(function () {
    $(this).css({ display: "none" });
    $(this).parent().parent().parent().find(".counter_btn").css({ display: "flex", "justify-content": "space-between" });
    $(this).parent().parent().parent().find("input").val(1);
  });

  // input spinner
  $(".add_btn").click(function () {
    let $current_val = parseInt($(this).siblings("input").val());

    let $update_val = $current_val + 1;
    $(this).siblings("input").val($update_val);
  });

  $(".remove_btn").click(function () {
    let $current_val = parseInt($(this).siblings("input").val());

    let $update_val = $current_val - 1;
    $(this).siblings("input").val($update_val);

    if ($update_val < 1) {
      $(this).parent().parent().parent().find(".counter_btn").css({ display: "none" });
      $(this).parent().parent().parent().find(".static_btn").css({ display: "block" });
    }
  });

  /*=========================== added cart counter  =============================*/
  // input spinner
  $(".plus-btn").click(function () {
    let $current_val = parseInt($(this).siblings("input").val());

    let $update_val = $current_val + 1;
    $(this).siblings("input").val($update_val);
  });
  $(".minus-btn").click(function () {
    let $current_val = parseInt($(this).siblings("input").val());
    let $update_val;

    if($current_val > 0){
      $update_val = $current_val - 1;
      $(this).siblings("input").val($update_val);
    }
  });

});

/*=========================== count down timer =============================*/
var timer = document.querySelector('.timer');

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  if(timer){
    timer.innerHTML = `End In ${days} days : ${hours} hours : ${minutes} minutes`;
  }
    
  if (distance < 0) {
    clearInterval(x);
    if(timer){
      timer.innerHTML = "Time Expired!";
    }
  }
}, 1000);


/*=========================== product modal slider =============================*/
const multipleSwiperSlides = function () {
  let sliderMain = document.querySelectorAll(".swiper.js-slider--main");
  let sliderNav = document.querySelectorAll(".swiper.js-slider--nav");

  // Arrays to hold swiper instances
  let mainArray = [];
  let navArray = [];

  // Slider Main
  sliderMain.forEach(function (element, i) {
    // Push swiper instance to array
    mainArray.push(
      new Swiper(element, {
        loop: true,
        loopedSlides: 4,
      })
    );
  });

  // Slider Nav
  sliderNav.forEach(function (element, i) {
    var self = sliderNav;
    // Push swiper instance to array
    navArray.push(
      new Swiper(element, {
        slidesPerView: 4,
        loop: true,
        loopedSlides: 4,
        slideToClickedSlide: true,
        spaceBetween: 15
      })
    );
  });

  const checkOnPage = function () {
    if (sliderMain.length > 0 && sliderNav.length > 0) {
      let numberOfSlides = mainArray.length || navArray.length || 0;
      if (mainArray.length !== navArray.length) {
        console.warn("multipleSwiperSlides: Number of main slides and nav slides is different. Expect incorrect behaviour.");
      }
      for (let i = 0; i < numberOfSlides; i++) {
        mainArray[i].controller.control = navArray[i];
        navArray[i].controller.control = mainArray[i];
      }
      // console.log("multipleSwiperSlides: Things should be working fine. B)");
    }
  };

  checkOnPage();
};

multipleSwiperSlides();
