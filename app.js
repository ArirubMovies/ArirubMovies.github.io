let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

let key = '01e3f76cc847be8ddd87f5fe0d436ec6'

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-MX&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
				<div class="wrap">
				<div class="tarjeta-wrap">
				<div class="tarjeta">
				<div class="adelante">
				
					<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					
					</div>
					<div class="atras">
					<div class="info">
					<h3 class="titulo">${pelicula.title}</h3>
					<h3 class="popularidad">Popularidad: ${pelicula.popularity}</h3>
					<h3 class="idioma">Idioma: ${pelicula.original_language}</h3>
					<h3 class="idioma">Puntos: ${pelicula.vote_average}</h3>
					<a class="trailer" href="https://www.themoviedb.org/movie/${pelicula.id}/videos" target="_blank">
					<h3 class="trailer">Trailer</h3>
					</a>
					</div>
					</div>
					</div>
				</div>
				</div>
				`;
			});

			document.getElementById('populares').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log(llave);
			document.getElementById('populares').innerHTML = llave;
		} else if(respuesta.status === 404){
			console.log(noexiste);
			document.getElementById('populares').innerHTML = noexiste;
		} else {
			console.log(error);
			document.getElementById('populares').innerHTML = error;
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();


const cargartendecia = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
				<div class="wrap">
				<div class="tarjeta-wrap">
				<div class="tarjeta">
				<div class="adelante">
					<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					
					</div>
					<div class="atras">
					<div class="info">
					<h3 class="titulo">${pelicula.title}</h3>
					<h3 class="popularidad">Popularidad: ${pelicula.popularity}</h3>
					<h3 class="idioma">Idioma: ${pelicula.original_language}</h3>
					<h3 class="idioma">Puntos: ${pelicula.vote_average}</h3>
					<a class="trailer" href="https://www.themoviedb.org/movie/${pelicula.id}/videos" target="_blank">
					<h3 class="trailer">Trailer</h3>
					</a>
					</div>
					</div>
					</div>
				</div>
				</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log(llave);
			
		} else if(respuesta.status === 404){
			console.log(noexiste);
			document.getElementById('contenedor').innerHTML = noexiste;
		} else {
			console.log(error);
			document.getElementById('contenedor').innerHTML = error;
		}

	} catch(error){
		console.log(error);
	}

}


cargartendecia();

