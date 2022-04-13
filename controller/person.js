const getDbData = (req,res)=>{
    console.log('[getDbData]-> incoming request')
    res.send('Success Operations')
}

module.exports = {getDbData}