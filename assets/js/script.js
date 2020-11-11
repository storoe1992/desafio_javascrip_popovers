$(function(){
    $("a").click(function(e){
        if(this.hash !== ""){
            e.preventDefault();
            var gato = this.hash;
            $('html, body').animate({
                scrollTop : $(gato).offset().top
            },800,function(){
                window.location.hash = gato;
            });
        }
    });

    $(".fa-codepen").popover({
        container: 'body'
    });  
    $(".fa-apper").popover({
        container: 'body'
    });   
    $(".fa-angrycreative").popover({
        container: 'body'
    }); 
    $(".fa-google").popover({
        container: 'body'
    });   
    $(".fa-500px").popover({
        container: 'body'
    });  
    $(".fa-apple").popover({
        container: 'body'
    }); 
    $(".fa-aviato").popover({
        container: 'body'
    }); 
    $(".fa-d-and-d").popover({
        container: 'body'
    });  
});