import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.send('Server is ready')
})

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            joke:'funny',
            any:true
        },
        {
            id:2,
            joke:'funny',
            any:true
        },
        {
            id:3,
            joke:'funny',
            any:true
        },
        {
            id:4,
            joke:'funny',
            any:true
        }
    ]

    res.send(jokes)
})

const port= process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`port on ${port}`);
    
})