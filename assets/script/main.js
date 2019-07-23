$(document).ready(function(){

    //product image viewer

    $(document).on('click','.product-sub-img-holder img' ,function(){
        $('.img-viewer').toggleClass('active')
        var src = $(this).attr('src')
        $('.img-viewer-holder').attr('src' , src)
      })
      $(document).on('click','.close-viewer',function(){
        $('.img-viewer').toggleClass('active')
    })

    //product image viewer --end


    //show more and less

    $(".showMore").click(function(){
        $(".showMore").hide();
    })
    $(".showLess").click(function(){
        $(".showMore").show();
    })

    //show more and less --end


    //product tab content

    $("#tab2").click(function(){
        $("#tab1").removeClass("active-tab");
        $("#tab2").addClass("active-tab");
        $(".list-content1").slideUp();
        $(".list-content2").slideDown();
    })

    $("#tab1").click(function(){
        $("#tab2").removeClass("active-tab");
        $("#tab1").addClass("active-tab");
        $(".list-content1").slideDown();
        $(".list-content2").slideUp();
    })

    //product tab content --end


    //product questions

    var form_count = 1, form_count_form, next_form, total_forms;
    total_forms = $("fieldset").length;  
    $(".next").click(function(){
    form_count_form = $(this).parent();
    next_form = $(this).parent().next();
    next_form.show();
    form_count_form.hide();
    setProgressBar(++form_count);
    });  
    $(".previous").click(function(){
    form_count_form = $(this).parent();
    next_form = $(this).parent().prev();
    next_form.show();
    form_count_form.hide();
    setProgressBar(--form_count);
    });
    setProgressBar(form_count);  
    function setProgressBar(curStep){
    var percent = parseFloat(100 / total_forms) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    .html(percent+"%");   
    } 
    // Handle form submit and validation
    $( "#user_form" ).submit(function(event) {    
    var error_message = '';
    if(!$("#email").val()) {
    error_message+="Please Fill Email Address";
    }
    if(!$("#password").val()) {
    error_message+="<br>Please Fill Password";
    }
    if(!$("#mobile").val()) {
    error_message+="<br>Please Fill Mobile Number";
    }
    // Display error if any else submit form
    if(error_message) {
    $('.alert-success').removeClass('hide').html(error_message);
    return false;
    } else {
    return true;	
    }    
    });

    //product questions --end



    //product page user comment and question range slider

    $('.ui.slider')
    .slider({
      min: 0,
      max: 5,
      // onChange: function(value, meta) {
      //   if(value !=0) {
      //     alert(value);
      //   }
      // }
    })

    //product page user comment and question range slider --end



    //product page news swiper slider

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3000,
            },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 2 },
            600: { slidesPerView: 1 }
        }
    });

    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1200: { slidesPerView: 3 },
          992: { slidesPerView: 2 },
          600: { slidesPerView: 1 }
        }
    });

    var swiper = new Swiper('.news-swiper-container-width', {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3000,
            },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 2 },
            600: { slidesPerView: 1 }
        }
    });
    //product page news swiper slider --end


    // back to top btn

    $("#toTop").click(function () {
        $("html, body").animate({scrollTop: 0}, 800);
    });

    // back to top btn --end

});