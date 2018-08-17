/**
 * Created by Administrator on 2018/8/17.
 */
Flowtime.showProgress(true);
Flowtime.addEventListener("flowtimenavigation", onNavigation, false);
function onNavigation (e) {
    if (e.progress == 2) {
        player.pause();
    }
}
Flowtime.start();
$(function(){
    var bgmMusic = document.getElementById("bgmMusic");




    //音乐
    $("#on").click(function(){
        bgmMusic.pause();
        $("#on").hide(200);
        $("#off").css({"display":"inline-block"},300);
    });
    $("#off").click(function(){
        bgmMusic.play();
        $("#off").hide(200);
        $("#on").css({"display":"inline-block"},300);
    });

});