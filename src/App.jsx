// import { EjercicioTema } from './components/EjercicioTema/EjercicioTema';

import './App.css';
// import { FormColor } from './components/Form/FormColor';
// import { FormLogin } from './components/Form/FormLogin';

import { FormColor, FormLogin } from './components/Form';

function App() {
	return (
		<div>
			{/* <EjercicioTema /> */}
			<FormColor />
			<FormLogin />
		</div>
	);
}

export default App;
