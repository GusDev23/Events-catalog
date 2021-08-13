$(".re").click(function(){
    if($("#register").first().is( ":hidden" ))
        $("#register").slideDown("slow");
    else
        $("#register").slideUp("slow");
});
$(".lg").click(function(){
    if($("#login").first().is( ":hidden" ))
        $("#login").slideDown("slow");
    else
        $("#login").slideUp("slow");
});