function adicionarFilme() {
    var filmeFavotito = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    document.getElementById('filme').value = ''
  
    
    var trailerFilme = document.getElementById('trailer').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href="' + trailerFilme + '"target="_blank">' + '<img src=' + filmeFavotito + '>'
    document.getElementById('trailer').value = ''
}

function limpaFilme(){
    var elementoListaFilmes = document.getElementById('listaFilmes');
   elementoListaFilmes.innerText = "";
  
    }

//  https://upload.wikimedia.org/wikipedia/pt/f/f6/Dark_%28s%C3%A9rie%29.jpg
// https://www.youtube.com/watch?v=JCCssUOtn2E