const fs= require('fs');

const crearArchivo =  async (base= 5,limite=10,listar) => {
    try {
        let salida= '';
        for(i=0; i<=limite; i++){
            let resultado= base* i;
             salida+= ` ${base} x ${i} = ${resultado}\n`;
          
          }
          if(listar){
          console.log("================".green);
          console.log(` Tabla del : ${base}`.green);
          console.log("================".green);
          console.log(salida);
          }
        /*
        fs.writeFile('tabla5.txt', salida, (err)=>{
            if(err) throw err;
            console.log("tabla 5 txt creado");
        })
        */
        fs.writeFileSync( `./salida/tabla${base}.txt`, salida);
        return `tabla ${base}  txt creado`;
    } catch (err) {
        throw err;
    }
   
    
}
module.exports={
    //crearArchivo :crearArchivo
    crearArchivo
}