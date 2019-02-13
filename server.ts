import * as express from 'express';
import * as serveIndex from 'serve-index';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

//const express = require('express');
//const serveIndex = require('serve-index');
const app = express();

//création d'un type perso
interface Person  {
  name: string;
  firstname: string;
  age: number;
  birthDay: Date;
}

const Laetitia: Person = {
  name: 'Herbin', 
  age: 39, 
  firstname: 'Laetitia', 
  birthDay: new Date()
};

function talk(p: Person) {
  console.log('Je suis '+ p.firstname);
}

talk(Laetitia);

timer(1000).subscribe(x => console.log('Coucou', Laetitia.firstname, Laetitia.name));

timer(2000).pipe(
  map(n => 'Alban')
).subscribe(s => console.log('Bonne journée',s));


const o = timer(3000).pipe(
  map(soeur => 'Aline')
);

o.subscribe (retour => console.log('Amuse-toi bien', retour));


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

