const { createServer } = require('node:http'); // require = mengambil module node:http
const hostname = '127.0.0.1' // hostname = local host kita
const port = 8889; // port = gerbang atau gateway untuk masuk ke file nya
const server = createServer((req, res) => {
    res.statusCode = 200; // status code = untuk menjalankan perintah dengan kode 200 (berjalan) 400 (error)
    res.setHeader = ('Content-Type', 'text/plain'); // content type = tipe text nya yang berisi text/plain
    res.end('Hello World'); // res end = mengeprint hasil nya 
});
// di bagian ini server membaca hasil dari port dan hostname 
// serta server juga menjalankan dengan console log
server.listen(port, hostname, () => {
    console.log(`Server Running At http://${hostname}:${port}/`);
});
