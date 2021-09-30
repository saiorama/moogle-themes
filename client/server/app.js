const express = require('express')
const app = express()
const port = 3000
const data= require('./index');
const content= require('./content');

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/posts?id=blogposts/:id', (req,res) =>{
  res.set('Access-Control-Allow-Origin', '*');
  console.log("Inside the get function");
  res.send(content);
  // content.forEach(element => {
  //   if(element.filepath==='blogposts/'+req.params.uid)
  //   {
  //     res.send(element.html);
  //   }
  // });
})