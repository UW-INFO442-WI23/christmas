import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import About from './components/About';
import Login from './components/Login';
import Healthier from './components/Healthier';
import Faster from './components/Faster';
import Better from './components/Better';
import Calendar from './components/Calendar';
import background from "./img/bg-lg.png"
import { LogOut } from './components/Logout';
import ImportData from  './data/data.json'
import * as d3 from "d3";

function App() {
	const [errorMessage, setErrorMessage] = useState(null);
	// Stores user log in information, friends and enables more fucntionality.
	const [user, setUser] = useState({});
	const [userData, setUserData] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const styles = {
		container: {
			backgroundImage: `url(${background})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			width: '100vw',
			height: '100vh'
		}
	};
	async function fetchData() {
		try {
			const data = await d3.json("./data/data.json");
			const userMonth = data.find((data) => {
				return data.user === 'testID' //changed
			});
			console.log(userMonth, 'testing')
			setUserData(userMonth);
		} catch (error) {
			setErrorMessage(error)
		}
	}	
	// Check if User Login
	useEffect(() => {
		fetchData();
		const auth = getAuth();
		const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
			if(firebaseUser) {
				setUser(firebaseUser);
				setLoggedIn(true);
				console.log("loggin in", firebaseUser, loggedIn);
			} else {
				console.log("logging out");
				setUser({});
				setLoggedIn(false);
			}
		})

		function cleanup() { 
			unregisterAuthListener();
		}

		return cleanup;
		}, []) 

	console.log(userData, 'main');
	return (
		// Main div that contains all the pages.
		<div className='page-container '>
		<div className='fill-content'>
			{/* Nav Bar */}
				<Navbar loggedIn={loggedIn}/>
				{/* Routes to each corresponding page */}
			<Routes>
					<Route path='/' element={<Home />} />
			<Route path='/calendar' element={<Calendar ImportData={userData}/>} />
					<Route path='/about' element={<About />} />
					<Route path='/resources' element={<Resources />} />
						<Route path='/healthier' element={<Healthier />} />
						<Route path='/faster' element={<Faster />} />
						<Route path='/better' element={<Better />} />
					<Route path='/login' element={<Login loggedIn={loggedIn}/>} />
			<Route path='/logout' element={<LogOut />} />
				</Routes>
				</div>
		</div>
	);
}

export default App;