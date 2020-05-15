const express = require('express');
const app = express();
const port = 8400;
const cors = require('cors');


const moviesRouter = express.Router();
const productRouter = express.Router();

app.use(cors());
var products = [
 {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
]


app.get('/',(req,res)=>{
	res.send('Hiii from Express package');
})


// app.get('/movies',(req,res)=>{
// 	res.send('Hiii from Express movies');
// })

moviesRouter.route('/').get((req,res)=>{
	res.send('Hiii from Express movies')
});   

moviesRouter.route('/details').get((req,res)=>{
	res.send('Hiii from Express movies details');
})

productRouter.route('/').get((req,res)=>{
	res.send(products);
})

productRouter.route('/details').get((req,res)=>{
	res.send('Hiii from Express products details');
})

// app.get('/details',(req,res)=>{
// 	res.send('Hiii from Express movies details');
// })

// app.get('/products',(req,res)=>{
// 	res.send(products);
// })
// app.get('/details',(req,res)=>{
// 	res.send('Hiii from Express products details');
// })


app.use('/movies',moviesRouter);
app.use('/products',productRouter);

app.listen(port,function(err){
	if(err) throw err;
	console.log(`Server is running on ${port} port`);
})