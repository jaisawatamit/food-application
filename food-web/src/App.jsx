// src/App.jsx
import './App.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/authSlice'; // Adjust path as needed
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import PrivateRouter from './components/PrivateRouter';
import Nav from './components/Nav'; // If Nav is globally used
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');
  
    try {
      const user = userString ? JSON.parse(userString) : null;
  
      if (token && user) {
        dispatch(loginUser({ token, user }));
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user'); // optional: clear invalid data
    }
  }, [dispatch]);

  return (
    <div className='w-full min-h-screen pt-2'>
      <BrowserRouter>
        <Nav /> 
        <div className='pt-[60px] w-full min-h-screen '>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRouter>
                <Home />
              </PrivateRouter>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
      <ToastContainer autoClose={500} />
    </div>
  );
}

export default App;
