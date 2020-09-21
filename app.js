var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//set colour,brand,door,name 

  
app.get('/home', (req, res) =>{
    res.send('Home page');
})

app.get('/training', (req, res) =>{
    res.send('traning page');
})

app.get('/doctuments', (req, res) =>{
    res.send('doctuments page');
})

app.get('/aboutus', (req, res) =>{
    res.send('About Us page');
})
app.get('*', function(req, res){
    res.status(404).send('page not found');
  });

app.listen(3000, (err) => {
    if (err) {
        console.log('server not start')
    }
    else {
        console.log('running at 3000 port')
    }
})