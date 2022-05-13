const obtenerDatos = async () => {
	const respuesta = await fetch('	https://api.adviceslip.com/advice');
	const resultado = await respuesta.json();

	document.querySelector('.title').innerHTML = `Advice #${resultado.slip.id}`;
	document.querySelector('.text').innerHTML = `"${resultado.slip.advice}"`;
};

obtenerDatos();
