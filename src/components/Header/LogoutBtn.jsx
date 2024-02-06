import React from 'react'
import { useDispatch } from 'react-redux'
import { authService } from '../../mysql/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        const log = authService.logout();
        if (log) {
            dispatch(logout())
        }
    }
    return (
        <div>Logout</div>
    )
}

export default LogoutBtn