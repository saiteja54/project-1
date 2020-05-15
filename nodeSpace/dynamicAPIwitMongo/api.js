const express = require('express');
const app = express();
const port = 8400;
const cors = require('cors');
const mongo =  require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;
let col_name = "resturants"




app.use(cors());



app.get('/',(req,res)=>{
	res.send('Hiii from Express package');
})

//GET
app.get('/getResturants',(req,res)=>{
    var query = {}
    if(req.query.id){
        query = {id:req.query.id};
    }
    else if(req.query.city){
        query={city:req.query.city};
    }

    db.collection(col_name).find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// Post 
app.post('/addResturant',(req,res)=>{
    console.log(req.body);
    db.collection(col_name).insert(req.body,(err,result)=>{
        if(err){
            throw err;
        } 
        else{
            res.send('Data Added');
        }
    })
})

//Update
app.put('/upadteResturant',(req,res)=>{
    db.collection(col_name).update(
        {_id:req.body._id},
        {
            $set :{
                name:req.body.name,
                locality:req.body.locality,
                city:req.body.city
            }
        },(err,result)=>{
            if(err){
                throw err;
            } 
            else{
                res.send('Data Updated');
            }
        }
      
    )
})

//Delete
app.delete('/deleteUser',(req,res)=>{
    db.collection(col_name).remove({_id:req.body.id},(err,result)=>{
         if(err){
            throw err;
        } 
        else{
            res.send('Data Deleted');
        }
    })
})





// app.listen(port,function(err){
// 	if(err) throw err;
// 	console.log(`Server is running on ${port} port`);
// })

MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log('Error while connecting..');
    db = client.db('zomatoData');
    app.listen(port,(err)=>{
        console.log(`Server is running on ${port} port`)
    })
})