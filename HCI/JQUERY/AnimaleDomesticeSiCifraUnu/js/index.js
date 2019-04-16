$(document).ready(function(){
    var ok = 1;
    setTimeout(function(){
        ok = 0;},22000);
        $('#gamesPage').on('click', function()
        {
            window.location.href="html/meniuJocuri.html"
        })
        $('#andrei').on('click',function(){
    var audio = $('#player')[0];
    if (ok == 0)
     {audio.play();
        ok = 1;
        setTimeout(function () {
           
            ok = 0;
         }, 22000);}
       
    });
    $('#porc').on('click',function(){
    var porc = $('#porcPlayer')[0];
    if (ok == 0)
    {
        porc.play();
        ok = 1;
        setTimeout(function(){
            ok = 0;},13000);}
        });
    $('#vaca').on('click',function(){
    var vaca = $('#vacaPlayer')[0];
    if (ok == 0)
    {
        ok = 1;
        vaca.play();
        setTimeout(function(){
            ok = 0;
        },7000)
    }
	 
    });
    $('#hen').on('click',function(){
    var vaca = $('#henPlayer')[0];
    if(ok == 0 )
    {
        ok = 1;
        vaca.play();
        setTimeout(function(){
            ok = 0;
        },7000)
    }
	 
    });
    $('#dog').on('click',function(){
    var vaca = $('#doggoPlayer')[0];
    if (ok == 0)
    {
        ok = 1;
        vaca.play();
        setTimeout(function(){
            ok = 0;
        },7000)
    }
	
    });
    $('#cat').on('click',function(){
    var vaca = $('#catPlayer')[0];
    if (ok == 0)
    {
        ok = 1;
        vaca.play();
        setTimeout(function(){
            ok = 0;
        },14000)
    }
	
    });
});