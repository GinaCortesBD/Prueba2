const express = require('express')
const routerStatus = require('./router/status')
const cors = require('cors')
const routerPerson=require('./router/person')

const port = process.env.PORT || 8080

const app =express()


const corsOptions={
    origin:(origin, callback)=>{
        console.log(origin)
        callback(null,true)
    }
}

//CORS (Seguridad para ver si el dominio es valido)
//Validar la información
app.use(cors(corsOptions))

//aplication/x-www

app.use(express.urlencoded({extended: true}))

// usar los json
app.use(express.json())


// Asignacion Puerto
app.listen(port, ()=>{
console.log(`Server is ready ${port}`)
})

//Rutas

app.use('/', routerStatus)

app.use('/person', routerPerson)



