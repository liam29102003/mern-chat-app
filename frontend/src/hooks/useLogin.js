import { useState} from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from'react-hot-toast';
const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser }  = useAuthContext();
    const login = async (
        {
            username,
            password
        }
    ) => {
        const success = handleInputErrors({
            
            username,
            password,
           
          });
          if (!success) return;
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        username,
                        password,
                    }
                ),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            else{
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            }
        }
        catch (error) {
            console.log("Fail");
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }

    }
    return { loading, login };
}
export default useLogin;


function handleInputErrors({
    
    username,
    password,
    
  }) {
    if ( !username || !password) {
      toast.error("All fields are required");
      return false;
    }
    
    return true;
  }
  
