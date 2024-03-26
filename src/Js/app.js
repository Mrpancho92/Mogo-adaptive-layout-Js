
$(function() {
    
    let header = $("#header"),
     introH = $("#intro").innerHeight(),
     scrolloffset = $(window).scrollTop();
     
        /* Fixed Header */
        checkScroll(scrolloffset);

        $(window).on("scroll", function() {
        
            scrolloffset = $(this).scrollTop();
            checkScroll(scrolloffset);

        });

        function checkScroll(scrolloffset) {
            if (scrolloffset >= introH) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }

        /* Smooth scroll */

        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();

            let  $this = $(this),
                blockId = $this.data('scroll'),
                blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");


            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
        });

        /* Menu nav toggle */
        $("#nav-toggle").on("click", function(event) {
            event.preventDefault();

            $(this).toggleClass("active");
            $("#nav").toggleClass("active");
        });

      
        /* Collapse */
        function offsetHeight($this) {
            let heightText;
            $(".accordion__content").map((item,index) => {
                if ($this[0].children[1] === index) {
                    $this.children()[1].style.display = "block";
                    heightText = $this.children()[1].offsetHeight + 53.4 + "px";
                }
            });
            return heightText;
        }

        $("[data-collapse]").each(function() { 
           if (!$(this).hasClass("active")) {
            $(this)[0].style.height = "53.4px";
           }
           if ($(this).hasClass("active")) {
            $(this)[0].style.height = offsetHeight($(this)); 
           }
        });

        $("[data-collapse]").on("click", function(event) {
            event.preventDefault();
            let $this = $(this);
            if ($this.hasClass("active") === true){
                $(this).animate({
                    height: "53.4px"
                }, 300, function() {
                    $this.children()[1].style.display = "none";
                    $this.toggleClass("active");
                });
            } else { 
                $(this).animate({
                   height: offsetHeight($this)
                }, 300, function() {
                    $this.children()[1].style.display = "block";
                    $this.toggleClass("active");
                });
            }
        });

        /* Slider */

        $("[data-slider]").slick({
            Infinity: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });

});