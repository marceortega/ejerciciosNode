var fs = require ('fs');

// ojo, lo primero es pensar el pseudo codigo, aqui neceitamos una funcion que copie el archivo de la vieja carpeta y lo lleve a 
// la nueva carpeta 
// y tambien neceitamos un afuncion que elimine el archivo de la vieja carpeta
// osea trabajeremos en dos funciones principalmente
//  necesitamos parametros dinamicos para que despues pueda ir copiando diferentes archivos
//definimos tres parametros, ruta original, nueva rita y el archivo para copiar
//usaremos copyFile, el primer parametro sera la ruta y el archivo, aqui lo concateno con / para que no hayan errores
//segundo parametro la ruta que sera el nuevo archivo
    function copiarArchivo (rutaOriginal, nuevaRuta, archivoParaCopiar){
        fs.copyFile(rutaOriginal + '/' + archivoParaCopiar, nuevaRuta + '/' + archivoParaCopiar, (error)=>{
            if(error){
                console.log("error");
            }else{
                eliminarArchivo ( rutaOriginal, archivoParaCopiar)  
            }
        })
    }

    function eliminarArchivo (rutaOriginal, archivoParaCopiar){
        fs.unlink (rutaOriginal +'/'+ archivoParaCopiar , (error)=>{
            if (error){
                console.log("error al eliminar");
            }else {
                console.log("borar esta ok");
            }
        })

    }

    copiarArchivo('./archivos','./otrosArchivos','archivo_original.txt')