$(function(){
  "use strict";

  /*================================================================
        mobile menu and bottom navigation
    =================================================================*/
  $(".mobile_menu a, .mobile_top_bar a, .cus_menu a ").click(function(){
    var mobile_menu_content_name = $(this).attr("data-action");

    // If go to home then scroll is available -----------
    if(mobile_menu_content_name == "home"){
      $(".mobile_menu_closer").hide();
      $("body").removeClass("body_scroll_lock");
    }
    else{
      $("body").addClass("body_scroll_lock");
      $(".mobile_menu_closer").show();
    }

    // If go to home then scroll is available -----------
    $(".mobile_menu_content").removeClass("mobile_content_switch");

    $("."+mobile_menu_content_name).toggleClass("mobile_content_switch");

    //Activing color 
    $(".mobile_menu a, .mobile_top_bar a ").removeClass("mob_menu_item_active");
    $(this).addClass("mob_menu_item_active");
    
  });

  /*================================================================
        mobile menu closer
  =================================================================*/

  $(".mobile_menu_closer a").click(function(){
    $(".mobile_menu_closer").hide();
  });

  /*================================================================
        sticku header
  =================================================================*/
  var $navOffset = $('.desktop-header').offset().top;
    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

       if($scroll > $navOffset){
           $('.desktop-header').addClass('sticky');
       }else{
           $('.desktop-header').removeClass('sticky');
       }
   });

  /*================================================================
        all category show/hide
  ================================================================*/
  $('.category-btn').on('click',function(){
      $('.all-categories').slideToggle(600);
  });

  /*================================================================
        add to fav icon 
  =================================================================*/
  $('.add-to-fav').on('click',function(){
      $(this).toggleClass('active');
  });

  /*================================================================
        banner slider
  =================================================================*/

  $('.banner-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="button-prev"><i class="ph-caret-left"></i></button>',
    nextArrow: '<button class="button-next"><i class="ph-caret-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  });

  /*================================================================
        filter button
  =================================================================*/
  let filterBtn = document.querySelector('.filter-price-btn');
  let item1 = document.querySelector('.filter-item1')
  let item2 = document.querySelector('.filter-item2')

  $('.filter-item1').on('click', function(){
    filterBtn.innerText = item1.innerHTML;
  })
  $('.filter-item2').on('click', function(){
    filterBtn.innerText = item2.innerHTML;
  });
  

  /*================================================================
    product detail modal
  =================================================================*/
  $(".product-image").click(function(){
    $("#product_modal").modal('show');
  });

  /*================================================================
    product detail modal slider
  =================================================================*/

    let $productGallery = $('.product-gallery'),
    $productThumbs = $('.product-thumb');

    $('#product_modal').on('shown.bs.modal', function () {
    $productGallery.slick({
      dots: false,
      infinite: true,
      fade: false,
      speed: 300,
      arrows:false,
      autoplay:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.product-thumb',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });  
  
  $productThumbs.slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:false,
    autoplay:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-gallery',
    focusOnSelect: true,

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
    });
  });

  $productGallery.slick({
    dots: false,
    infinite: true,
    fade: false,
    speed: 300,
    arrows:false,
    autoplay:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-thumb',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });  

$productThumbs.slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows:false,
  autoplay:false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-gallery',
  focusOnSelect: true,

  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
  ]
  });

  /*================================================================
    product detail description slider
  =================================================================*/
  $('.product-desc-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows:false,
    autoplay:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
    });


  /*================================================================
    single product add to cart counter
  =================================================================*/
    // Script for product counter buttons
    $(".static_btn").click(function(){
      $(this).css({"display":"none"});
      $(this).parent().parent().parent().find(".counter_btn").css({"display":"flex","justify-content":"space-between"});
      $(this).parent().parent().parent().find("input").val(1);
    });

    // input spinner
    $(".add_btn").click(function(){
      let $current_val = parseInt($(this).parent().parent().parent().find("input").val());
     
      let $update_val = $current_val + 1;
      $(this).parent().parent().parent().find("input").val($update_val);
    });
  
    $(".remove_btn").click(function(){
        let $current_val = parseInt($(this).parent().parent().parent().find("input").val());
      
        let $update_val = $current_val - 1;
        $(this).parent().parent().parent().find("input").val($update_val);
    
        if($update_val < 1){
            $(this).parent().parent().parent().find(".counter_btn").css({"display":"none"});
            $(this).parent().parent().parent().find(".static_btn").css({"display":"block"});
        }
    });


});