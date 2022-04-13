const router =require('express').Router()
const controller =require('../controller/person')



router.get('/', controller.getDbData)

module.exports=router