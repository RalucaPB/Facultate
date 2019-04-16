

var ok=0;
$(document).ready(function(){
    var firstClick, secondClick;
	var s,f;
	
    var aud = 1;
    setTimeout(function(){
        aud = 0;},7000);




    $(".right").on('click', function(){
        if(firstClick == undefined)
        {if(aud==0){
            firstClick = $(this).attr('attr-letter');
			f=$(this);}
        }
        else
        {
            if (aud == 0)
            {   var audio = $('#audioMaiIncearca')[0];
                audio.play(); 
            firstClick=undefined;}
               
        }
    })

    $(".left").on('click', function(){
        if(secondClick == undefined)
        {
            if(aud==0){
            secondClick = $(this).attr('attr-letter');
			s=$(this);}
        }

        if(firstClick === secondClick)
        {
            if (aud == 0)
            {
            var audio = $('#audioBravo')[0];
                 audio.play();
            ok++;
            let image=new Image();
            image.src="../images/unu.png";
            image.id="unu2";
            document.getElementById("unu1").appendChild(image);
            setTimeout(()=>{
            document.getElementById("unu1").removeChild(image);},4000);
            console.log(document.getElementById("unu1"));
            f.hide();
            s.hide();
			f.attr('disabled','true');
			s.attr('disabled','true');
            firstClick = undefined;
            secondClick = undefined;
            }
			
        }
        else
        { if (aud == 0)
            {   var audio = $('#audioMaiIncearca')[0];
                audio.play(); }
            secondClick = undefined;
            firstClick=undefined;
        }
    if(ok===3){
     
        setTimeout(function () {
           
            window.location.href = "meniuJocuri.html";
         }, 3000);
        }

    })
	
	
})