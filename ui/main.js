//submit username/password to login
var submit =document.getElementById('submit_btn');
//create a request object
var request =new XMLHttpRequest();
//capture the response and store it in a variable
request.onreadystatechange =function(){
    if(request.readyState ===XMLHttpRequest.Done){
        //take some action
    if(request.status == 200){
        console.log('user logged in');
        alter('Logged in succesfully');
    }else if(request.status===403
    ){
        alert('username/password is incorrect');
    }else if(request.status===500){
        alert('Something went wrong on the server');
     }
    }
    //Not done yet
    };
    //Make request
    var username= document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://asvinsarma.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type', 'application/json');
    
};

