var fs = require ("fs");
//con esto puedo incorporar informacion a un archivo desde node, ojo que yo puedo escribir mal la ruta y de indediato
// node me creara un archivo con el nuevo nombre, por lo que podria escribir muchos archivos sin tener que hacer las carpetas
// el las creara 
fs.writeFile('./archivos/texto.txt', 'aqui escribo lo que quiero ver escrito en el archivo desde node', (error)=>{
        if (error){
            console.log('el error esta al escribir el archivo')
        } else{
            console.log('archivo escrito oki')
        }
})
// aqui voy a escribir mal la ruta, y se creara una carpeta 
fs.writeFile('./archivos/textoss.txt', 'aqui escribo lo que quiero ver escrito en el archivo desde node', (error)=>{
    if (error){
        console.log('el error esta al escribir el archivo')
    } else{
        console.log('archivo escrito oki')
    }
})
// aqui voy a agregar informacion al archivo que creo usando appendfile, deja un espacio en lo nuevo para que no quede pegado
fs.appendFile('./archivos/textoss.txt', '        aqui ESTA LO NUEVO QUE QUIERO VER ', (error)=>{
    if (error){
        console.log('el error esta al escribir el archivo')
    } else{
        console.log('archivo escrito oki')
    }
})
// y agregare otra cosa mas
fs.appendFile('./archivos/textoss.txt', '       lo tercero que quiero agregar ', (error)=>{
    if (error){
        console.log('el error esta al escribir el archivo')
    } else{
        console.log('archivo escrito oki')
    }
})

fs.appendFile('./archivos/textoss.txt', '       lo cuarto que quiero agregar ', (error)=>{
    if (error){
        console.log('el error esta al escribir el archivo')
    } else{
        console.log('archivo escrito oki')
    }
})