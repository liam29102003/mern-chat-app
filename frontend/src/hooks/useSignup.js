import React from "react";
// import {toastr} from "react-redux-toastr";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
function useSignup() {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser}=useAuthContext();
  const [error, setError] = React.useState(null);
  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log("Success");
      if(data.error)
        {
          console.log(data.error);
          throw new Error(data.error);
      
        }
        localStorage.setItem("chat-user",JSON.stringify(data));
        setAuthUser(data);
        toast.success("Signup successful");
    } catch (error) {
        console.log("Fail");

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    signup
  };
}

export default useSignup;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
