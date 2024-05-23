import {useState} from "react"
import { useAuthContext } from '../context/AuthContext';
import toast from'react-hot-toast';
import Cookies from 'js-cookie';
const useLogout = () =>{
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext();
    const logout = async() =>{
    try {
        const res = await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem('chat-user');
        Cookies.remove('jwt');
        setAuthUser(null);
        console.log(localStorage.getItem('chat-user'));

    } catch (error) {
        toast.error(error.message);
    }
    finally{
        setLoading(false);
    }
}
return {loading,logout}
}
export default useLogout;
