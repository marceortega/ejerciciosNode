var express = require('express');
var router = express.Router();
//aqui lo que hice fue importar express como libreria y una seccion especifica de ella que se llama router y administra las rutas

/* GET users listing. */
//verbo de http get
router.get('/', function(req, res) {
  res.render ('dinamico')
  //res.send('informacion dinamica ');
});
// fijate que siempre ponemos '/' porque espamos entrando a la raiz de dinamico

// ahora vamos a ver como le pasamos argumentos a dinamico, aqui le estamos pasando a /dinamico un parametro datoURL
// se pueden incluir tantos parametros como necesitemos asi podemos modificar la URL cada vez 
//para que pruebes esto, cuando esten en el navegador a continuacion de /dinamico escribe / 198234

router.get('/:datoURL/:ID', function(req, res) {
  res.render ('dinamico', {
      datos:{
        titulo:req.params.datoURL,
        ID:req.params.ID,
      }

  })  // aqui estoy agragando la plantilla pug dinamico
 // res.send('informacion dinamica : ' + req.params.datoURL);
});


// se exporta como modulo para que app.js pueda administarr las ruta 
module.exports = router;
