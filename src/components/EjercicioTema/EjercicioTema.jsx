import { useState } from 'react';
import { temas } from '../../data/temas';

import './Style.css';

export const EjercicioTema = () => {
	const [tema, setTema] = useState(temas[0]);

	const { nombre, ...temaSeleccionado } = tema;

	const cambiarTema = () => {
		// version 1 Math.round(Math.random() * (temas.length - 1))
		// version 2 Math.floor(Math.random() * temas.length)

		const temaAleatorio = temas[Math.round(Math.random() * (temas.length - 1))];

		setTema(temaAleatorio);
	};

	return (
		<section style={temaSeleccionado}>
			<h1>Estas usando {nombre}</h1>
			<div>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					dolorum hic quod illum molestiae sunt, natus similique repudiandae.
					Illo enim laboriosam sapiente a. Omnis, consequuntur nemo voluptate
					quisquam minima necessitatibus.
				</p>
				<button onClick={cambiarTema}>Cambiar Tema</button>
			</div>
		</section>
	);
};
