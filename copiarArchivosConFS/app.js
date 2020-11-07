var fs = require ('fs');
// ingreso primero el primer parametro la carpeta que quiero copiar
// segundo parametro, copio la misma ruta pero porngo nuevo nombre
// el trecer parametro es una funcion que se ejecutara cada vez 
fs.copyFile('./archivos/archivo_original.txt', './archivos/archivo_nuevo.txt', (error)=>{
    if (error){
        console.log('error al copiar');
        throw error;

    }else{
        console.log('copia ok');
    }
})