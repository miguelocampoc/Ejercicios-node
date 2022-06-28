const {crearArchivo}= require('./helpers/multiplicar')
const argv  = require('./config/yargs');
const colors = require('colors');

//console.log(process.argv);
//console.log(argv);
//console.log(argv);

//console.log(argv.base);
//console.clear();
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base= 5] = arg3.split('=');
let base= argv.base;
let limite= argv.limite;
let listar= argv.listar;
crearArchivo(base, limite, listar)
.then(nombreArchivo=>console.log(nombreArchivo)).catch(err=> console.log(err))
