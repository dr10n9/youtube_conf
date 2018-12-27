const app = require('./server').Server;
const config = require('./config');
app.listen(config.port, (err) => {
    if(err) console.log(`err\n${err}`);
    else console.log()
})