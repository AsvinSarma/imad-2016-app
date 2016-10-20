//Counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
  //Create a request to objrct
   var request = new XMLHttpRequest();
   
   
  //Capture the response and store it in a variable
   request.onreadystatechange = function(){
    if(request.readyState===XMLHttpRequest.DONE) {
        if(request.status ===200){
            var counter=request.responseText;
            var span = document.getElementById('count');
  span.innerHTML = counter.toString();
        }
    }
   };
   
   //Make the request
   request.open('GET','http://http://asvinsarma.imad.hasura-app.io/counter',true);
   request.send(null);
}; 


//Submit Name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submir_btn');
submit.onclick =function(){
    var names= ['name1','name2','name3'];
    var list='';
    for (var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
};