const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const { MongoClient } = require("mongodb");
const fetch = require('node-fetch');


dotenv.config()

const app = express();
const PORT = 5000;

app.use(cors());


mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));


app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});


const connectionURL = process.env.DB_CONNECT

const client = new MongoClient(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true});

const tellTime = async function () {
  console.log(new Date());
}
/*
const minutes = 5;
const interval = minutes * 60 * 1000;

setInterval(function() {
  tellTime().catch(console.log);
  async function run() {
    try {
      await client.connect();
      const database = client.db("shop");

      
      const collection = database.collection("productsFromDrop");
      let url = "https://msdrop.com.ua/export/RWwn/json";
      let settings = { method: "Get" };
      const response = await fetch(url, settings)
      const  msdrop_com_ua  = await response.json();
      const result =  await collection.updateMany({}, {$set: {msdrop_com_ua}})
      console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
      );
  
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
}, interval);
*/
/*
async function run() {
  try {
    await client.connect();
    const database = client.db("shop");
    const collection = database.collection("productsFromDrop");
    let url = "https://msdrop.com.ua/export/RWwn/json";
    let settings = { method: "Get" };
    const response = await fetch(url, settings)
    let  msdrop_com_ua  = await response.json();
  
    const result = await collection.insertMany( 
      msdrop_com_ua
    );
    
    //const result =  await collection.updateMany({}, {$set: {msdrop_com_ua}})
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
*/