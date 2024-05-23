import {useState, useEffect} from 'react'
import toast from'react-hot-toast'
 
const useGetConversations = () => {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
      const getConversations = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            console.log(data);
            if(data.error){
                console.log(data.error);
                throw new Error(data.error);
            }
            setConversations(data);
        } catch (error) {
          console.log(error);
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }

      }
      getConversations();
    },[]
    )
    
 return {loading, conversations}
}

export default useGetConversations
