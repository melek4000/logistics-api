// app.js
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send("API Gateway Running");
});

app.get('/shipment/:id', async (req,res)=>{
  const id = req.params.id;
  res.json({id, status:"IN_TRANSIT"});
});

app.listen(3000, ()=>console.log("Gateway started"));
