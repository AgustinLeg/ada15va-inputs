import { useState } from 'react';

export const FormColor = () => {
	const [color, setColor] = useState('');

	if (color === 'reset') setColor('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				const colorInput = e.target.color.value;

				// setColor(colorInput);

				console.log(colorInput);
			}}
		>
			<div className="form-control">
				<label htmlFor="color">Color</label>
				<input
					id="color"
					name="color"
					autoComplete="off"
					value={color}
					placeholder="rojo, azul, etc..."
					onChange={(e) => {
						setColor(e.target.value);
					}}
				/>
			</div>
			{/* <button type="button">Cancelar</button> */}
			<button type="submit">Enviar</button>
			<p>el valor de color es: {color}</p>
		</form>
	);
};
