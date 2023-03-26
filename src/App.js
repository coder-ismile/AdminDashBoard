import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes  } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Single from './pages/sigle/Single'
import List from './pages/list/List';
import New from './pages/new/New'
import './style/dark.scss'
import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import SignUp from './pages/signUp/SignUp';

function App() {
   const{ darkMode }= useContext(DarkModeContext);
   const {currentUser} = useContext(AuthContext);

    const RequireAuth =({ children })=>{
      return currentUser? children : <Navigate to="/login"/>
    };


  return (
    <div className={ darkMode ? "app dark" : "app"}>
        <BrowserRouter>
                <Routes>
                  <Route path='/'>
                              <Route path='login' element={<Login/>} />
                              <Route path='signUp' element={<RequireAuth><SignUp/> </RequireAuth>}/>
                              <Route index element={<RequireAuth><Home/></RequireAuth>}/>
                        <Route path='users' >
                              <Route index element={<RequireAuth><List/></RequireAuth>}/>
                                <Route  path=':userId' element={<RequireAuth> <Single/> </RequireAuth>}/>
                                <Route  path='new' element={<RequireAuth> <New inputs={userInputs} title="Add New User"/></RequireAuth>}/>
                        </Route>
                        <Route path='products' >
                                <Route index element={<RequireAuth> <List/> </RequireAuth>}/>
                                <Route path=':productId' element={<RequireAuth> <Single/> </RequireAuth>}/>
                                <Route path='new' element={<RequireAuth><New inputs={productInputs} title="Add New Product "/></RequireAuth>}/>
                        </Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
