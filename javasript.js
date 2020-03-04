const body = document.querySelector('body')
let nuevoNav = document.createElement('nav');
let nuevoDiv = document.createElement('div');
let nuevoDiv2 = document.createElement('div');
let nuevoA = document.createElement('a');
let nuevoButton = document.createElement('button');
let nuevoForm = document.createElement('form');
let nuevoInput = document.createElement('input')

nuevoNav.classList.add('navbar')
nuevoDiv.classList.add('contenedor-izquierda')
nuevoA.classList.add('ancla-izquierda')
nuevoButton.classList.add('boton-izquierda')
nuevoForm.classList.add('form')

nuevoA.innerHTML = 'Onefootball'
nuevoA.setAttribute('href', 'https://onefootball.com/es/inicio')

nuevoButton.innerHTML = 'España'

nuevoInput.setAttribute('type', 'text')
nuevoInput.setAttribute('placeholder', 'Búsqueda de eqipos y competiciones')

body.appendChild(nuevoNav).appendChild(nuevoDiv).appendChild(nuevoA);
nuevoDiv.appendChild(nuevoButton)
nuevoNav.appendChild(nuevoDiv2).appendChild(nuevoForm).appendChild(nuevoInput)


//secccion de paginas populares

let urlImagenes = [
    'https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png',
    'https://images.onefootball.com/icons/leagueColoredCompetition/128/18.png',
    'https://images.onefootball.com/icons/leagueColoredCompetition/128/5.png'
]

let nuevaSeccion = document.createElement('section');
let contenedorTituloDiv = document.createElement('div');
let contenedorPaginasPopularesDiv = document.createElement('div');
let nuevoAPaginaPopular = document.createElement('a')
let nuevoUl = document.createElement('ul');
let nuevoLi = document.createElement('li');
let nuevoALigas = document.createElement('a');
let nuevoImg = document.createElement('img');
let nuevoP = document.createElement('p');

nuevaSeccion.classList.add('main-seccion')
contenedorPaginasPopularesDiv.classList.add('contenedor-paginasPopu')
nuevoAPaginaPopular.classList.add('anclaPaginasPopulares')

nuevoAPaginaPopular.innerHTML = 'Páginas Populares'
nuevoAPaginaPopular.setAttribute('href', 'https://onefootball.com/es/inicio')
nuevoImg.setAttribute('src', 'https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png')

nuevoP.innerHTML = 'Liga española'

body.appendChild(nuevaSeccion).appendChild(contenedorPaginasPopularesDiv).appendChild(contenedorTituloDiv).appendChild(nuevoAPaginaPopular)
contenedorPaginasPopularesDiv.appendChild(nuevoUl).appendChild(nuevoLi).appendChild(nuevoALigas).appendChild(nuevoImg)
nuevoALigas.appendChild(nuevoP)

urlImagenes.forEach(url => {

})

// for(let i=0; i<urlImagenes.length; i++){
//     let nuevoLi = document.createElement('li');
//     let nuevoALigas = document.createElement('a');
//     let nuevoImg = document.createElement('img');
//     let nuevoP = document.createElement('p');
//     nuevoImg.setAttribute('src', url)

//     this.nuevoUl.appendChild(nuevoLi).appendChild(nuevoALigas).appendChild(nuevoImg)
//     nuevoALigas.appendChild(nuevoP)
// }