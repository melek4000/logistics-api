// app.js
const express = require('express');
const app = express();

app.get('/health', (req,res)=>{
  res.json({status:"OK"});
});

app.listen(3001, ()=>console.log("Shipment service running"));
