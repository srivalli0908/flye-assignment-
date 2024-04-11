$(window).resize(function () {
    var windowHeight = $( window ).height();
    
    var newHeaderHeight = windowHeight * 0.3;
    $('#header').height(newHeaderHeight);
    
    var newContentHeight = windowHeight * 0.7;
    var newContentHeightMargin = (windowHeight * 0.3);
    $('#content').height(newContentHeight);
    $('#model').height(newContentHeightMargin);
  });
  
  
  function calcIncomeTax() 
  {
    var GAI = parseFloat(document.getElementById("grossannualincome").value);
    var EI = parseFloat(document.getElementById("extraincome").value);
    var Age = parseFloat(document.getElementById("age").value);
    var TAD = parseFloat(document.getElementById("totalappded").value);
    
    if (GAI >= 8) 
    {
      document.getElementById("total").innerHTML;
      document.getElementById("tax").innerHTML="No Tax";
    }
     else if (Age<40) 
    {
        document.getElementById("total").innerHTML = 0.3*(GAI+EI-TAD);
        document.getElementById("tax").innerHTML="Tax";
    } 
    else if (Age>=40||Age<60)
    {
        document.getElementById("total").innerHTML = 0.3*(GAI+EI-TAD);
        document.getElementById("tax").innerHTML="Tax";
    } 
    else if (Age>=60)
    {
        document.getElementById("total").innerHTML = 0.3*(GAI+EI-TAD);
        document.getElementById("tax").innerHTML="Tax";
    } 
  }