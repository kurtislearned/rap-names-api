const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'age': 29, 
    'birthname': 'Shéyaa Bin Abraham-Joseph', 
    'birthlocation': 'London, England',
},
'chance the rapper': {
    'age': 29, 
    'birthname': 'Chancelor Bennett', 
    'birthlocation': 'Chicago, Illinois',
},
'unknown': {
    'age': 0, 
    'birthname': 'unknown', 
    'birthlocation': 'unknown',
}
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`the server is now running on port ${PORT}! Betta go catch it!`)
})