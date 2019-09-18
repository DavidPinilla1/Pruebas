const express = require( 'express' );
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get( '/', function( req, res ) {
    res.send( 'Hola mundo' )
} )

app.listen( 3000,()=>console.log('Servidor levantado en puerto 3000') )
