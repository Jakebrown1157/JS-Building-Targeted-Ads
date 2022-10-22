const express = require('express')
const app = express()
const liveServer = require('live-server')

async function main() {

    app.listen(3004, () => {
        liveServer.start({
            port: 3004,
            logLevel: 0,
            root: './public'
        })
    })
}

main()