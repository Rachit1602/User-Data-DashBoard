import React from 'react';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Navigation from './components/Navigation';
import RegisterForm from './components/RegisterForm';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route path="/" element={<UserForm/>} />
                    <Route path="/login" element={<AdminLogin />} />
                    <Route path="/register" element={<RegisterForm/>}/>
                    <Route
                        path="/submissions"
                        element={
                            <PrivateRoute>
                                <AdminDashboard />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;