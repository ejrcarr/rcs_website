import './App.css';
import { Alert } from './components/layout/Alert';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/layout/Hero';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Alert />
			<Hero />
			<Footer />
		</div>
	);
}

export default App;
