// 
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000 ;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');



// middleware
app.use(cors());
app.use(express.json());


// mongo uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pm9ea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

 const coffeeCollection = client.db('coffeeDB').collection('coffee')
// 

app.get('/addCoffee' , async (req ,res)=>{
    const cursor = coffeeCollection.find();
    const result  = await  cursor.toArray();
    res.send(result)
})
// 
app.get('/addCoffee/:id' , async (req ,res) =>{
    const id = req.params.id;
    const query = {_id : new ObjectId(id) } ;
    const result = await coffeeCollection.findOne(query);
    res.send(result);
})


  // 
  app.post('/addCoffee', async(req, res)=>{
    const coffeeData = req.body;
    console.log(coffeeData);
    const result = await coffeeCollection.insertOne(coffeeData)
    res.send(result)
      
  })
// 


app.put('/addCoffee/:id' , async ( req ,res)=>{
  // 
   const id = req.params.id
   const filter = {_id : new ObjectId(id)};
   const options = { upsert : true};
   const updatedCoffee = req.body;
   const CoffeeForUpdate = {
       $set:{
        name : updatedCoffee.name , quantity: updatedCoffee.quantity , chef: updatedCoffee.chef, supplier: updatedCoffee.supplier, taste: updatedCoffee.taste, category: updatedCoffee.category, details: updatedCoffee.details, photoUrl: updatedCoffee.photoUrl
       }
   }
// 
   const result = await coffeeCollection.updateOne(filter, CoffeeForUpdate , options);
   res.send(result)
})



// delete
 app.delete('/addCoffee/:id', async(req ,res)=>{
    const id = req.params.id;
    const query = {_id : new ObjectId(id)};
    const result = await coffeeCollection.deleteOne(query)
    res.send(result)
 })






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




// 
app.get("/", (req , res)=>{
    res.send("Coffee making server is running ")
} )



// 
app.listen(port, ()=>{
    console.log(`Coffee server is running on port : ${port}`)
})