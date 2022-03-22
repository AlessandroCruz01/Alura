// const http = require('http');//modo nativo

import app from './src/app.js'
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando no localhost:${port}`)
})
