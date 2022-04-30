const express = require('express');
const app = express();
const port = 3000;

app.get('/aprobado', (req, res) => {
  res.json({
    status: "Aprobado"
  })
})

app.get('/denegado', (req, res) => {
  res.json({
    status: "Denegado"
  })
})



app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
