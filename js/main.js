const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
const searchIcon = document.querySelector('header nav .search-icon');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', function() {
	searchContainer.style.display = searchContainer.style.display === 'none' ? 'flex' : 'none';
});
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Arreglo con los nombres de los archivos HTML
const archivosHTML = [
  "disaster.html",
  "extraction.html",
  "ezqualizer.html",
  "favor.html",
  "madamweb.html",
  "shazam.html",
  "tenet.html",
  // Agrega más archivos HTML aquí
];

searchBtn.addEventListener('click', function() {
  const searchQuery = searchInput.value.toLowerCase();
  const resultadosBusqueda = archivosHTML.filter(archivo =>
    archivo.includes(searchQuery)
  );

  // Mostrar los resultados de búsqueda en la página
  mostrarResultados(resultadosBusqueda);
});

function mostrarResultados(resultados) {
  // Aquí deberás implementar la lógica para mostrar los resultados en la página
  // Puedes crear un elemento HTML y mostrarlo, o utilizar una librería de terceros como React o Vue
  console.log('Resultados de búsqueda:', resultados);
}
// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});