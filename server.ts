const express = require('express');
const serveIndex = require('serve-index');
const app = express();
const www: string = 'www';

//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});

// middleware : si l'url correspond à un fichier c'est tout. si ne correspond pas au fichier, passe au middleware suivant
app.use(express.static(www)); 

// middleware qui sert à afficher joliment les répertoires
app.use(serveIndex(www, {'icons': true}));

// autre façon d'écrire un middleware
app.use((req, res, next) => {
    console.log('url not found', req.url);
    next();
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

