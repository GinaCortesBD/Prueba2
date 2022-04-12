const router = require('express').Router()

router.get('/', (req,res)=>{
    console.log("Incoming request")
    res.send("Success Operations")
});

router.post('/', (req,res) => {
    console.log("Incoming request POST", req.body);
    res.send("Success Operations")
})


module.exports =router