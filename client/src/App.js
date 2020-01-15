import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Homepage from './pages/home/Homepage'
// import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<div className='main'>
				<Homepage />
			</div>
		</div>
	);
}

export default App;
