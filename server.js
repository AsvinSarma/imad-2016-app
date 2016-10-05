var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' :{
        title:'Article One',
        heading:'Article One',
        date:'Oct 2 2016',
        content: `<p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                </p>
          
                 <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                 </p>
                 <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                 </p>`
    },
    'article-two' :{ 
        title:'Article Two',
        heading:'Article Two',
        date:'Oct 2 2016',
        content: `<p>This is the Second article of my webapp.
                 </p>`
    },
    'article-three':{   
        title:'Article Three',
        heading:'Article Third',
        date:'Oct 2 2016',
        content: `<p>This is the Third article of my webapp.
                 </p>`
        
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>Article One</title>
        <meta name="viewport" content="width=device-width initial scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
       
        </head>
        <body>
            <div class="container">
                  <div>
                    <a href="/">Home</a>
                    </div>
                <hr/>
                <h3>Article one</h3>
            <div>
                Oct 2 2016
            </div>
            <div>
                <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                </p>
          
                 <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                 </p>
                 <p>This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.This is the first article of my webapp.
                 </p>
              </div>
              </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    // articleName == article-one
    //articles[articleName]== {} content object for article one
    var articleName =req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});
app.get('/article-two', function (req, res) {
     res.sendfile(path.join(_dirname,'ui', 'article-two.html'));
    });
    app.get('/article-three', function (req, res) {
     res.sendfile(path.join(_dirname,'ui', 'article-three.html'));
    });
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
