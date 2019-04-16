$(document).ready(function(){
	var aud=1;
	setTimeout(function(){
        aud = 0;},12000);
	$('#gainaImg').on('click',function(){
		if(aud==0){
	var audioCorect= $('#audioCorect')[0];
	 audioCorect.play();
	   setTimeout(function () {
          window.location.href = "meniuJocuri.html";
	   }, 5000);
	}
	
	});
	
	$('#iepureImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	$('#magarImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	
	/*
	$('#imgT').on('click',function(){
	var audio = $('#audio4')[0];
	 audio.play();
	});*/
	
	});