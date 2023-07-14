const express = require('express')
const swaggetUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./blogApi.yml')

const app = express()
app.use(express.json())
app.use('/docs',swaggetUI.serve,swaggetUI.setup(swaggerDoc))


app.get('/status',(req,res)=>{
    res.status(200).json({
        status:"ok"
    })
})

app.use((req, res, next)=>{
    res.status(500).json({
        message:"Server under construction"
    })
})

app.listen(5000,()=>{
    console.log('server listening on port 5000');
})