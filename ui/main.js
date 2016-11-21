//Submit username/password to login
var submit =document.getElementById('submit_btn');
submit.onclick =function(){
    //Create a request object
    var request =new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange =function(){
        if(request.readyState ===XMLHttpRequest.DONE){
            //Take some action
            if(request.status ===200)
        }
    }
}