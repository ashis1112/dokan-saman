const express=require('express')
const app=express()
const port=5000
const mongo=require('mongoose')
const Items=require('./model/model')
const db="mongodb+srv://ashis:ashis123@cluster0.mtamz.mongodb.net/dokan?retryWrites=true&w=majority"
mongo.connect(db,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(res=>console.log(`database connected`))
.catch(err=>console.log(err))

app.use(express.json({extended:false}))

app.post('/add',(req,res)=>{
    const {deo,foundation,eyeliner,eyeshadow,conceler,fixer,primer,golapjol,babypowder,gurosindur,liquidsindur,nailremover}=req.body
    const data={}
    if(deo){data.deo=deo}
    if(foundation){data.foundation=foundation}
    if(eyeliner){data.eyeliner=eyeliner}
    if(eyeshadow){data.eyeshadow=eyeshadow}
    if(conceler){data.conceler=conceler}
    if(fixer){data.fixer=fixer}
    if(primer){data.primer=primer}
    if(golapjol){data.golapjol=golapjol}
    if(babypowder){data.babypowder=babypowder}
    if(nailremover){data.nailremover=nailremover}
    if(liquidsindur || gurosindur){data.sindur={liq:liquidsindur,guro:gurosindur}}
    
    const item=new Items(data)
    item.save().then(()=>res.status(200).send("added")).catch(err=>console.log(err))
    
})
app.put('/update',(req,res)=>{
    const {deo,foundation,eyeliner,eyeshadow,conceler,fixer,primer,golapjol,babypowder,gurosindur,liquidsindur,nailremover}=req.body
    const data={}
    if(deo){data.deo=deo}
    if(foundation){data.foundation=foundation}
    if(eyeliner){data.eyeliner=eyeliner}
    if(eyeshadow){data.eyeshadow=eyeshadow}
    if(conceler){data.conceler=conceler}
    if(fixer){data.fixer=fixer}
    if(primer){data.primer=primer}
    if(golapjol){data.golapjol=golapjol}
    if(babypowder){data.babypowder=babypowder}
    if(nailremover){data.nailremover=nailremover}
    if(liquidsindur || gurosindur){data.sindur={liq:liquidsindur,guro:gurosindur}}

    Items.findOneAndUpdate(
        {},
        {$set:data},
        {new:true}
    ).then(()=>res.status(200).send("update")).catch(err=>console.log(err))
    
})

app.post('/search',(req,res)=>{
    res.status(200).send('searching')
})


app.listen(port,()=>console.log(`server running ${port}`))
