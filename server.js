const app = require ('./app')
const http = require ('http')

const PORT =  process.env.PORT|| 4000
const server = http.createServer(app)
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})