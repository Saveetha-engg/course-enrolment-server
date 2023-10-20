const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (request, response) => {
    response.send({ message: 'Hello World!' })
})

app.listen(PORT, console.log(`Server runs at http://localhost:${PORT}/api/v1/enroll`))