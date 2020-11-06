var fs= require("fs");
// todos los item dentro de la carpeta  obtendremos un arreglo con ellos// ojo que aqui podriamos recorrerlo para aplicarle un filtro
fs.readdir('./archivos', {withFileTypes:true} , (error,items )=>{
    console.log(items)
    console.log(items[1])
    throw error
})

