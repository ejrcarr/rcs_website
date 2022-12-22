import './App.css';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar/Navbar';
import LanguageState from './context/language/LanguageState';

function App() {
	return (
		<LanguageState>
			<div className='App'>
				<Navbar />
				<Home />
				<Footer />
			</div>
		</LanguageState>
	);
}

export default App;
