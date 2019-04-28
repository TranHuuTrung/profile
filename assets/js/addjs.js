$(document).ready(function(){
    $('.main-panel').on('scroll',function(){
        var positionTop = $(".main-panel").scrollTop();
        console.log(positionTop);
        if(positionTop >200){
            $('.project1').addClass('animated slideInLeft');
            $('.project2').addClass('animated slideInUp');
            $('.project3').addClass('animated slideInRight');
        }
        if(positionTop >= 400){
            $('.cardMap').addClass('animated slideInUp');
        }
    })
})