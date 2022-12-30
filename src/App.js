import './App.css';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar/Navbar';
import LanguageState from './context/language/LanguageState';

function App() {
	return (
		<LanguageState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		</LanguageState>
	);
}

export default App;
