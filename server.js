var express=require('express');
var morgan=require('morgan');
var path=require('path');
var Pool=require('pg').pool;
var crypto= require('crypto')




var config = {
  user:'asvinsarma',
  databas:'asvinsarma',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password:process.env.DB_PASSWORD
};

var app=express();
app.use(morgan('combined'));



var articles ={
    'article-one':{
        title:'Article One',
        heading:'Article One',
        date:'Oct 2 2016',
        content:` 
           <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                </p>
              
                 <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                </p>
                 <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                 </p>`
    },
    'article-two':{
         title:'Article Two',
        heading:'Article Two',
        date:'Oct 5 2016',
        content: ` 
           <p>This is the second article of my webapp.</p>`
    },
    'article-three':{
         title:'Article Three',
        heading:'Article Three',
        date:'Oct 8 2016',
        content: ` 
           <p>This is the third article of my webapp.</p>`
    }
};
   
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate =`
    <html>
        <head>
            <title>${title}</title>
        <meta name="viewport" content="width=device-width initial scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
          <div class="container">
                <div>
                        <a href="/">Home</a>
                </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                  </div>
             </div>
        </body>
    </html>
    `;
     return htmlTemplate;
}



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt){
  //How  do we create a hash
  var hashed= crypto.pbkdf2Sync(input, salt, 10000,512,'sha512');
  return hashed.toSring('hex');

}

app.get('/hash/:input', function(req,res){
  var hashedString =hash(req.params.input,'this-is-some-random-string');
  res.send(hashedString);
});
app.get('/articles/:articleName', function(req,res){

   
   pool.query("SELECT * FROM article WHERE title='" + req.params.articleName+ "'", function(err,result) {
    if(err){
     res.status(500).send(err.toString());
    }else{
        if(result.rows.length===0){
         res.status(404).send('Article not found');
    }else{
         var articleData=result.rows[0];
     res.send(createTemplate(articleData));
    }
}
  });  
});
var pool =new Poll(config);
app.get('/test-db', function(req,res){
  //make a request
  //return a  response with the results
   pool.query('SELECT * FROM test', function(err,result){
     if(err){
          res.status(500).send(err,toString());
    }else{
          res.send(JSON.stringify(result));
   }
   
  });
  
});

var counter =0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});


app.get('/ui/style.css', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port=8080; //Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function(){
    console.log('IMAD cource app listening on port ${port}!');
});