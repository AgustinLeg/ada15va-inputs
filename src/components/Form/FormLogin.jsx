import { useState } from 'react';

export const FormLogin = () => {
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');

	const handleMail = (e) => {
		setMail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleInputs = (e, setState) => {
		// const inputName = e.target.name;

		// if (inputName === 'mail') {
		// 	setMail(e.target.value);
		// } else {
		// 	setPassword(e.target.value);
		// }

		setState(e.target.value);
	};

	const login = (e) => {
		e.preventDefault();

		if (mail === 'agus@agus.com' && password === 'hola123') {
			alert('Bienvenido agustin');
		} else {
			alert('Error al iniciar sesion');
		}
	};

	const errorMessage = validate(mail, password);

	return (
		<form onSubmit={login}>
			<h2>Login</h2>
			<div className="form-control">
				<label htmlFor="mail">Email</label>
				<input
					type="email"
					id="mail"
					name="mail"
					autoComplete="off"
					value={mail}
					onChange={(e) => {
						// handleInputs(e, setMail);
						setMail(e.target.value);
					}}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					autoComplete="off"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<p>{errorMessage}</p>
			<button type="submit">Login</button>
			<span style={{ display: 'block' }}>{mail}</span>
			<span style={{ display: 'block' }}>{password}</span>
		</form>
	);
};

const validate = (mail, password) => {
	if (!mail.includes('@')) return 'Email incorrecto';

	if (password.length < 6) return 'Password incorrecto';
};
