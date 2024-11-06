/*
console.log("blablabla")


const meuTitulo = document.getElementById("titulo") 


const meuSubtitulo = document.getElementsByClassName("subtitulo")


for (let i = 0; i < meuSubtitulo.length; i++){
meuSubtitulo[i].style.color = "#FB79C7"

}


meuSubtitulo[0].style.color = "#FC56BA" 



//meuTitulo.style.color = "#FE069A"



meuTitulo.textContent = "Olá Galera"
meuTitulo.innerText = "Oi Carlinhos"



//CRIANDO ELEMENTOS NOVOS
const novoParagrafo = document.createElement("p") // createElement significa Criar Elemento



novoParagrafo.textContent = "Este é o novo texto"



document.body.appendChild(novoParagrafo) // appendChild significa adicion um filho. Aqui eu estou dizendo: dentro do documento HTML, lá em body adicione o novo parágrafo que criei.



//REMOVER ELEMENTO
const paragrafoRemover = document.getElementById("remover")
paragrafoRemover.remove() // remove significa remover e remove o elemento da minha página

*/

//ASSIM PEGAMOS UM ELEMETO POR ID
const meuTitulo = document.getElementById("titulo")

const meuSubtitulo = document.getElementsByClassName("subtitulo")

const subtitulo = document.querySelector(".subtitulo") //Pega o PRIMEIRO  elemento que ele achar com essa classe

subtitulo.style.color = "purple"

const subtitulo2 = document.querySelectorAll(".subtitulo") //Pega todos os elementos da classe (é um array). É parecido com getElementByClassName

subtitulo[2].style.color = "orange"