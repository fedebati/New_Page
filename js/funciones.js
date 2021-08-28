jQuery(document).ready(listo);

function listo() {
    jQuery(".hambur").click(function (e) {
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        
        jQuery(".hambur i").toggleClass("fa-times");
    });
    
    jQuery("header .container nav a").click(function () {
        
        jQuery("header .container nav").removeClass("open");
        jQuery(".hambur i").removeClass("fa-times");
        
        let dev = jQuery(this).attr("href")
        
        jQuery("html,body").animate({
            "scrolltop":jQuery(dev).offset().top - 68
        });
    });

    
}

