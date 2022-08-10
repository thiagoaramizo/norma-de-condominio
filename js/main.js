import variaveisURL from "./variaveisURL.js"

const app = document.querySelector('#app')
var vURL = variaveisURL()
console.log(vURL)

var titulo = 'Nome do condomínio'

if( vURL.c ){
    titulo = vURL.c.replaceAll( "-", " ").toUpperCase()
}

app.innerHTML = `<h1>${titulo}</h1>`