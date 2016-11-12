//Counter code
var button =document.getElementById('counter');
var counter=0;
button.onclick=function(){
   //Make a request
   
   //Capture the response
   
   //Render the variable
   counter=counter+
   1;
   var span=document.getElementById('count');
   span.innerHTML =counter.toString();
};