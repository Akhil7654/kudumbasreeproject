const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {register}=require("./src/model/userSchema")
const { loan } = require("./src/model/loanSchema")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use (Bodyparser.json())





app.get("/",(req,res)=>{
    res.render("register")
})

app.get("/home",(req,res)=>{
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/register",(req,res)=>{
    
    const data=req.body
    console.log(data)
    const ob=new register(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/delete/:id',function(req,res){
    const id = req.params.id;
    register.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})

  app.put('/update/:id',function(req,res){
    
    const id = req.params.id,
    userId=req.body.userId,
    userName=req.body.userName,
    email=req.body.email,
    phoneNo=req.body.phoneNo
 


    register.findByIdAndUpdate({"_id":id},
    {$set:{"userId":userId,
    "userName":userName,
    "email":email,
    "phoneNo":phoneNo
    
}}).then(function(){
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })




//loan details


app.get("/home",(req,res)=>{
    loan.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/addloan",(req,res)=>{
    
    const data=req.body
    console.log(data)
    const ob=new loan(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/deleteloan/:id',function(req,res){
    const id = req.params.id;
    loan.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})


app.put('/updateloan/:id',function(req,res){
    
    const id = req.params.id,
    loanid=req.body.loanid,
    loanName=req.body.loanName,
    loanPlan=req.body.loanPlan,
    Interest=req.body.Interest,
    amount=req.body.amount

    register.findByIdAndUpdate({"_id":id},
    {$set:{"loanid":loanid,
    "loanName":loanName,
    "loanPlan":loanPlan,
    "Interest":Interest,
    "amount":amount

}}).then(function(){
    loan.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })



app.listen(3000,()=>{
    console.log("Successfully running on http://localhost:3000")
})