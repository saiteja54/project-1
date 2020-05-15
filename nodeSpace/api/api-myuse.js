const express = require('express');
const app = express();
const port = 8400;
const cors = require('cors');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const mongourl ="mongodb://localhost:27017";
let db;
let col_name = "zomato";

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


app.use(cors());

app.get('/',(req,res)=>{
	res.send('Hiii from Express package');
})


// Select all data and display in /rest
app.get('/rest',(req,res)=>{
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
});



// Select with query

/// '/rest1?id="111'  or '/rest1?city="111'
app.get('/rest1',(req,res)=>{
    var query = {}
    if(req.query.id){
        query ={_id:req.query.id}
    }else(req.query.city){
        query ={city:req.query.city}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
});




MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log('Error While Connecting');
    db = client.db('employee');
    app.listen(port,(err)=>{
        console.log(`Server is running on port ${port}`)
    })
})

