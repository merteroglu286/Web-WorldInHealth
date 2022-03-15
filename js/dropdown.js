$(function(){

    $("#dropdown-items-first li a").click(function(){
    
      $("#dropdown-first").text($(this).text());
      $("#dropdown-first").val($(this).text());
    
    });
    
});

$(function(){

  $("#dropdown-items-second li a").click(function(){
  
    $("#dropdown-second").text($(this).text());
    $("#dropdown-second").val($(this).text());
  
  });
  
});



   