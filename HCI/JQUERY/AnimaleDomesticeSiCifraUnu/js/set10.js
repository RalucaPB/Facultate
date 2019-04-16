$(document).ready(function(){
	setTimeout(function(){
        aud = 0;},8000);
	$('#caineImg').on('click',function(){
		if(aud==0){
	var audioCorect= $('#audioCorect')[0];
	 audioCorect.play();
	   setTimeout(function () {
           	window.location.href = "game11.html";
       }, 5000);
	}
	});
	
	$('#gascaImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	$('#oaieImg').on('click',function(){
		if(aud==0){
	var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();}
	});
	
	/*
	$('#imgT').on('click',function(){
	var audio = $('#audio3')[0];
	 audio.play();
	});
	*/
	});