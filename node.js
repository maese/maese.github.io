const fs = require('fs')
fs.readdirSync('./images').forEach(file => {
    console.log(file)
    fs.writeFile('./test.txt', `${file}\n` , {flag: 'as'}, function (err) {
        if (err) { console.log(err) }
        else { console.log('File written!'); }
    });
})