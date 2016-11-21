//Submit username/password to login
var submit =document.getElementById('submit_btn');
submit.onclick =function(){
    //Create a request object
    var request =new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange =function(){
        if(request.readyState ===XMLHttpRequest.DONE){
            //Take some action
            if (request.status ===200){
                
              alert('Logged in Succyessfully');
            }else if(request.status===403){
                alert('Username/password is wrong');
            }else if(request.status===500){
                alert('Something went wrong');
            }
}
//Not done yet
};
//Make the request
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST','http://asvinsarma.imad.hasura-app.io/login',true);
request.send(JSON.stringify({usrname:usename, password:password}));
};