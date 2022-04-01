import { Navigate, Route, Routes , } from "react-router-dom";
import { Home , Archive ,  SignIn, SignUp , Trash , Notes } from '../screens'
import { PrivateRoute } from "../components";
import Mockman from 'mockman-js';
import { useAuth } from "../context";




function Routers() {
    const { isAuthorized } = useAuth();
    return ( 
        
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <Notes />
            </PrivateRoute>
          }
        />
        <Route
          path="/archive"
          element={
            <PrivateRoute>
              <Archive />
            </PrivateRoute>
          }
        />
         <Route
          path="/trash"
          element={
            <PrivateRoute>
              <Trash />
            </PrivateRoute>
          }
        />
        { !isAuthorized.status && (
          <>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
          </>
        )}
      
        <Route path="*" element={<Navigate to='/' replace/> } />
        <Route path="/mock" element={<Mockman/>} />
      </Routes>
     );
}

export  { Routers };