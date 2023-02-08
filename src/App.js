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
import ImportData from  './data/data.json'

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  // Stores user log in information, friends and enables more fucntionality.
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  
  // Loading Data
  const [userData, setUserData] = useState([]);
  // const [displayData, setDisplayData] = useState([]);
  // Check if User Login

  // Only run it once, when refresh
  async function fetchData() {
    // Filter the data based on User
    const userFilter = ImportData.find((data) => {
      return data.user === 'testID' //Later change into given props of login.
    })
    try {
      setUserData(userFilter);
      // setDisplayData(ImportData);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    fetchData();
    const auth = getAuth();
      const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser) {
            console.log("loggin in", firebaseUser.displayName);
            setUser(firebaseUser);
            setLoggedIn(true);
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

  return (
	// Main div that contains all the pages.
    <div className='page-container'>
        {/* Nav Bar */}
		    <Navbar />
        <div className='fill-content'>
			{/* Routes to each corresponding page */}
            <Routes>
				<Route path='/' element={<Home />} />
        <Route path='/calendar' element={<Calendar userData={userData} />} />
				<Route path='/about' element={<About />} />
				<Route path='/resources' element={<Resources />} />
					<Route path='/healthier' element={<Healthier />} />
					<Route path='/faster' element={<Faster />} />
					<Route path='/better' element={<Better />} />
				<Route path='/login' element={<Login />} />
			</Routes>
			</div>
	</div>
  );
}

export default App;
