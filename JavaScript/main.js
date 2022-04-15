var mainProfile;
var Fadein_Anim;
var opacity = 0;
var intervalID = 0;

function MainProfileEvent(){
    mainProfile = document.getElementById("mainProfile");
    Fadein_Anim = setInterval(show, 200);
}

function show(){
    mainProfile = document.getElementById("mainProfile");
    opacity = Number(window.getComputedStyle(mainProfile).getPropertyValue("opacity"));
    if(opacity<1){
        //Fade in 핵심 부분
        opacity = opacity+0.1;
        mainProfile.style.opacity=opacity;
        //img.style.opacity=opacity;
    }
    else{
        clearInterval(intervalID);
    }
}

window.onload = function(){
    setTimeout(MainProfileEvent(), 500);
    Fadein_Anim = setInterval(show, 200);
}

// JQuery 부분
$(document).ready(function(){
    $('img#mainProfile').fadeIn(2000);
});