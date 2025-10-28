// Minimal Node server to serve static build (optional)
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'../dist')))

app.get('/api/hello', (req,res) => {
  res.json({message: 'Backend placeholder: no active backend required for the test.'})
})

app.listen(PORT, ()=> console.log('Server running on port', PORT))
