// const express = require("express")
// const app = express()
// const path = require("path")

// app.use(express.static("publica"))

// app.get("/",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"index.html"))
// })
// app.get("/about",(req,res)=>{
//     res.status(200).send("about page bro")
// })
// app.all("*",(req,res)=>{
//     res.status(404).send("<h1>page not found bro</h1>")
// })


// app.listen(3000,()=>{
//     console.log("your server is listening on port 3000")
// })


// Home route
const express = require('express');
const app = express();
const { products } = require('./data'); // Importing products from data.js

// Home route
app.get("/", (req, res) => {
    res.send('<h1>Home Page</h1><a href="/data">See All Products</a>');
});

// // Route to get all products (this will solve your "Cannot GET /data" issue)
// app.get('/data', (req, res) => {
//     res.json(products); // Send all products as JSON
// });

// // Route to get a single product by its ID
// app.get('/data/:productID', (req, res) => {
//     const { productID } = req.params; // Get productID from the URL
//     const singleProduct = products.find(product => product.id === Number(productID)); // Find product based on ID

//     if (!singleProduct) {
//         return res.status(404).send('<h1>Product not found</h1>'); // If no product is found, return a 404
//     }

//     res.json(singleProduct); // Send the found product as JSON
// });
app.get('/data',(req,res)=>{
    res.json(products)
})
app.get('/data/num',(req,res)=>{
    const allproducts = products.map((product)=>{
        const {id,name,image,desc} = product;
        return{id,name,image,desc}
    })
    res.json(allproducts)
})
// app.get('/data/:productID',(req,res)=>{
   
// const {productID} = req.params;
// console.log(req.params)
// const singleproduct = products.find(product=>product.id===Number(productID))
// if(!singleproduct){
//     return res.status(404).send('<h1>product not found</h1>')
// }
// res.json(singleproduct)
// })
app.get('/data/:productId',(req,res)=>{
    const {productId} = req.params;
    const singleproduct = products.find(product=>product.id===Number(productId))
    if(!singleproduct){
      res.status(404).send("<h1>this product is not found</h1>")
    }
    res.send(singleproduct)
})
app.get('/data/:productId/review/:reviewId',(req,res)=>{
    console.log(req.params)
    res.send("hello world")
})

// app.get('/api/v1/query',(req,res)=>{
//     // console.log(req.query)
//     const{search,limit} = req.query
//     let sortedProducts = [...products]

//     if(search){
//         sortedProducts = sortedProducts.filter((product)=>{
//            return product.name.startsWith(search)
//         })
//     }
//     if(limit){
//         sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     res.status(200).send(sortedProducts)
//     res.send('hello world')
// })
app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter(product=>{
           return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    res.status(200).send(sortedProducts)
    res.send("hello world")
})

// Start the server
app.listen(3000, () => {
    console.log("Your server has started on port 3000");
});
