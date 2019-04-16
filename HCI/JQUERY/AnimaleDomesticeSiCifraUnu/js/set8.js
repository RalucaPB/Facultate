var ok=0;
$(document).ready(function(){
	var aud = 1
	setTimeout(function(){
        aud = 0;},13000);
	$('#porcImg').on('click',function(){
		if(aud==0){
	var audioCorect= $('#audioCorect')[0];
	 audioCorect.play();
	  setTimeout(function () {
            window.location.href = "game9.html";
       }, 5000);}
	
	});
	
	$('#cocosImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	$('#soareceImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	
	/*
	$('#imgT').on('click',function(){
	var audio = $('#audio1')[0];
	 audio.play();
	});*/
	
	});