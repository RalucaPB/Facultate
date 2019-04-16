$(document).ready(function(){
	var aud = 1
	setTimeout(function(){
        aud = 0;},13000);
	$('#pisicaImg').on('click',function(){
		if(aud==0){
	var audioCorect= $('#audioCorect')[0];
	 audioCorect.play();
	   setTimeout(function () {
           window.location.href = "game10.html";
       }, 5000);
		}
	});
	
	$('#vacaImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	$('#rataImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	
	/*
	$('#imgT').on('click',function(){
	var audio = $('#audio2')[0];
	 audio.play();
	});*/
	
	});