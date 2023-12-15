import { BrowserRouter, Route, Router, Routes, redirect} from 'react-router-dom';
import Posts from '../pages/Posts';
import About from '../pages/About';
import Error from '../pages/Error';
import { PostIdPage } from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router/index';
import { Login } from '../pages/Login';

export function AppRouter(){
    const isAuth = true
    return(
        isAuth
        ?
        <Routes>
            {/* <Route exact path='/posts' element={<Posts/>} />
            <Route exact path='/posts/:id' element={<PostIdPage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<Error/>} /> */}

            {privateRoutes.map(route => 
                <Route path={route.path} Component={route.component} exact={route.exact} />
            )}
        </Routes>
        : 
        <Routes>
            {publicRoutes.map(route => 
                <Route path={route.path} Component={route.component} exact={route.exact} />    
            )}
            
        </Routes> 
       
    )
}