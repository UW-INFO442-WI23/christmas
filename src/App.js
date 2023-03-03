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
import { getDatabase, ref, onValue, set, push as firebasePush } from 'firebase/database';

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
	// Loading Firebase Data
	const db = getDatabase();
	const dataRef = ref(db, 'AllData');

	// Check if User Login
	useEffect(() => {
		const auth = getAuth();
		const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
			if(firebaseUser) {
				console.log('Logging In')
				setUser(firebaseUser);
				setLoggedIn(true);
			} else {
				console.log("logging out");
				setUser({});
				setLoggedIn(false);
			}
		})

		// Extracting Data
		const offFunction = onValue(dataRef, (snapshot) => {
			const allData = snapshot.val();
			const dataKeys = Object.keys(allData);
			const dataArray = dataKeys.map((key) => {
				const userData = allData[key];
				return userData;
			})
			setUserData(dataArray);
		})

		function cleanup() { 
			unregisterAuthListener();
			offFunction();
		}

		return cleanup;
	}, []) 


	function handleNewUser() {
		console.log(user.uid)
		if(loggedIn) {
			const fireData = userData;
			let existingUser = fireData.find(data => {
				return data.user === user.email;
			})
			if(existingUser === undefined) {
				// Creates Templete for NewUsers
				const month = [...Array(12)].map((e, i) => {
					return ({
						"month": i + 1,
						"Year": 2023,
						"date": [
							{
								"DateNum": -1,
								"WeekdayNum": -1,
								"Week": -1,
								"TimeSleep": "",
								"TimeWakeUp": "",
								"Notes": [""]
							}
						]
					})
				})
				// firebasePush(ref(db, 'AllData/' + user.uid), newUser);
				set(ref(db, 'AllData/' + user.uid), {
					user: user.email,
					month
				});
			}
		}
	}

	return (
		// Main div that contains all the pages.
		<div className='page-container '>
			<div className='fill-content'>
				{/* Nav Bar */}
					<Navbar loggedIn={loggedIn}/>
					{/* Routes to each corresponding page */}
				<Routes>
						<Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
				<Route path='/calendar' element={<Calendar handleNewUser={handleNewUser} importData={userData} user={user} loggedIn={loggedIn}/> }/>
						<Route path='/about' element={<About />} />
						<Route path='/resources' element={<Resources />} />
							<Route path='/healthier' element={<Healthier />} />
							<Route path='/faster' element={<Faster />} />
							<Route path='/better' element={<Better />} />
						<Route path='/login' element={<Login loggedIn={loggedIn}/>} />
				<Route path='/logout' element={<LogOut loggedIn={loggedIn}/>} />
					</Routes>
			</div>
		</div>
	);
}

export default App;