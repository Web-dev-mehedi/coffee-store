// 
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000 ;
const { MongoClient, ServerApiVersion } = require('mongodb');



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
  app.post('/addCoffee', async(req, res)=>{
    const coffeeData = req.body;
    console.log(coffeeData);
    const result = await coffeeCollection.insertOne(coffeeData)
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