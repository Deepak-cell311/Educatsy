import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authprovider';
import toast from 'react-hot-toast';

const Authentication = () => {
    const { authUser, logout } = useAuth();

    const handleLogout = () => {
        logout();
        toast.success("Logout successfully");
    };
    const navigate = useNavigate()
    const loginUser = () => {
        navigate('/login')
    }

    console.log("Authentication component - authUser:", authUser);

    return (
        <>
            {!authUser ? (
                <button
                    onClick={loginUser}
                    className="absolute top-14 right-20 z-50 bg-yellow-500 py-2 px-4 rounded-xl text-gray-900 text-3xl">
                    Log In
                </button>

            ) : (
                <button
                    onClick={handleLogout}
                    className="absolute top-14 right-20 z-50 bg-red-600 py-2 px-4 rounded-xl text-gray-100 text-3xl">
                    Log Out
                </button>
            )}
        </>
    );
};

export default Authentication;
