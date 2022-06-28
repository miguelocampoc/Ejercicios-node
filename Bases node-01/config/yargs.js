const argv = require('yargs').option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    default:5,
    describe:"Base de la tabla"

}).
option('li',{
    alias:'limite',
    type:'number',
    demandOption:true,
    describe:"Limite de la tabla",
    default:10
}).
option('l',{
    alias:'listar',
    type:'boolean',
    describe:"Muestra tabla en consola",
    demandOption:true,
    default:false
}).
check((argv,options)=>{
    if(isNaN(argv.b)){
        throw new Error("El valor introducido no es un numero");
    }
    else if(isNaN(argv.li)){
        throw new Error("El valor introducido no es un numero");
    }
    return true;
})
.argv;

module.exports = argv;