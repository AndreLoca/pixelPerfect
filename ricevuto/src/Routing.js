import './Routing.css';
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes/router'
import Login from './screens/login/Login'
import Home from './screens/home/Home'
import PswR from './screens/forgot_pw/PasswordReset'
import SignUp from './screens/signup/SignUp';

function Routing() {
  return (
    <>
      <Routes>
        <Route index path={routes.LOGIN} element={<Login />} />
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PSW_R} element={<PswR />} />
        <Route path={routes.SIGNUP} element={<SignUp />} />
      </Routes>
    </>
  );
}

export default Routing;
