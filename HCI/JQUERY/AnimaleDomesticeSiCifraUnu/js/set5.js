$(document).ready(function(){
	var aud = 1
	setTimeout(function(){
		aud = 0;
	},7000);
		
	$( "#1Txt" ).keyup(function() {
		var val= $('#1Txt')[0];
		if(aud==0){
	console.log(val);
	if(val.value==1)
	{var audioCorect= $('#audioCorect')[0];
	 audioCorect.play();
	   setTimeout(function () {
          window.location.href = "game6.html";
       }, 5000);
	}
	else if(val.value!="")
	{
		var audioGresit = $('#audioGresit')[0];
	 audioGresit.play();
	 val.value="";
	}}
	else val.value="";
});
});