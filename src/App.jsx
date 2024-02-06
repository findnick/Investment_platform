import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux';
import { authService } from './mysql/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components/Index';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const userData = authService.currentUser()
  //   if (userData) {
  //     dispatch(login({ userData }))
  //   }
  //   else {
  //     dispatch(logout())
  //   }
  //   setLoading(false);
  // },[])
  return !loading ? (
    <div>
      <Header />
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
