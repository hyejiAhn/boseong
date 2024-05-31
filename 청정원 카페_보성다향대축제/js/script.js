$(".family_list").hide();

$(".family>button").click(function(){
    $(".family_list").toggle();
})

$(".sub").hide();
$(".menu>li").mouseover(function(){
    $(this).children(".sub").stop().slideDown(200);
})
$(".menu>li").mouseout(function(){
    $(this).children(".sub").stop().slideUp(200);
})


$(".mobile").hide();
$(".m_btn").click(function(){
    $(".mobile").show();
    $(".m_menu").addClass("active")

})
$(".m_close").click(function(){
    $(".m_menu").removeClass("active")
    $(".mobile").fadeOut()
    
})

$(".m_sub").hide();
$(".m_lnb>li").click(function(){
    $(this).children(".m_sub").show()
    
})
$(".sub_close").click(function(){
    $(".m_sub").fadeOut(100)
})


setInterval(slide,600)
$(".slide_box>img:nth-child(1)~ img").hide();
let i=0
function slide(){
    i=i==10?0:i+1
    $(".slide_box>img").eq(i).show()
    $(".slide_box>img").eq(i).siblings().hide()
}




/*fade this */
$(".main").fadeThis({
    speed:300, //속도
    distance:200, //거리값
});
$(".down_arr").fadeThis({
    speed:100, //속도
    distance:50, //거리값
});
$(".conbox").fadeThis({
    speed:1000, //속도
    distance:50, //거리값
   // reverse:false, //반전여부
});

let lastTop=0;

$(window).scroll(function(){
    let top=$(this).scrollTop()

    if (top>100){

        $(".main_title1").css({"padding-right":top,"color":'gray',"transform":"scale(1.2)"})
        $(".main_title2").css({"padding-left":top,"color":'gray',"transform":"scale(1.2)"})

    }else{
        $(".main_title1").css({"padding-right":top,"color":'black',"transform":"scale(1)"})
        $(".main_title2").css({"padding-left":top,"color":'black',"transform":"scale(1)"})
    }




    if (top>lastTop){
        //스크롤 내렸을때
        $(".header").css({'margin-top':'-100px'})

    }else{
        //스크롤 올렸을때
        $(".header").css({'margin-top':'0px'})

    }
    lastTop=top;

})



