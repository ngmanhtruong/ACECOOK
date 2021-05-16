$(document).ready(function() {
    $(".btn1").click(function() {
        $(".vegi").addClass("enable");
        // $(".soup").hide();
        // $(".oil").hide();
        if($(".vegi").hasClass("disable")){
            $(".vegi").removeClass("disable");
        }
        if($(".home,.soup,.oil").hasClass("enable")){
            $(".home,.soup,.oil").removeClass("enable");
        }
        $(".home,.soup,.oil").addClass("disable");
        $("#button1, #clicked2, #clicked3").hide();
        $("#clicked1, #button2, #button3").show();
    });
    $(".btn2").click(function() {
        $(".soup").addClass("enable");
        if($(".soup").hasClass("disable")){
            $(".soup").removeClass("disable");
        }
        if($(".home,.vegi,.oil").hasClass("enable")){
            $(".home,.vegi,.oil").removeClass("enable");
        }
        $(".home,.vegi,.oil").addClass("disable");
        $("#button2, #clicked1, #clicked3").hide();
        $("#clicked2, #button1, #button3").show();
    });
    $(".btn3").click(function() {
        $(".oil").addClass("enable");
        if($(".oil").hasClass("disable")){
            $(".oil").removeClass("disable");
        }
        if($(".home,.soup,.vegi").hasClass("enable")){
            $(".home,.soup,.vegi").removeClass("enable");
        }
        $(".home,.soup,.vegi").addClass("disable");
        $("#button3, #clicked1, #clicked2").hide();
        $("#clicked3, #button2, #button1").show();
    });


    //change image hover
    // $("#button1").hover(function() {
    //     $(this).hide();
    //     // $("#clicked1").fadeTo('slow',1);
    //     // $("#clicked1").css('display') = 'block';
    //     $("#clicked1").show();
    // },
    // function(){
    //     $(this).show();
    //     $("#clicked1").hide();
    // });
    // $("#button2").hover(function() {
    //     $(this).hide();
    //     $("#clicked2").show();
    // },
    // function(){
    //     $(this).show();
    //     $("#clicked2").hide();
    // });
    // $("#button3").hover(function() {
    //     $(this).hide();
    //     $("#clicked3").show();
    // },
    // function(){
    //     $(this).show();
    //     $("#clicked3").hide();
    // });

    

    //scroll button
    $("#scroll").click(function (){
        $('html, body').animate({
            scrollTop: $(".title2").offset().top
        }, 2000);
    });
})



