
export default function variaveisURL () {
    var partesDaURL = (location.search.slice(1)).split('&')
    var variaveisURL = {};
    partesDaURL.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        variaveisURL[chave] = valor;
    });
    return variaveisURL
}