import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { APIURL } from "../services/config";

const AuthContext = createContext();

export default AuthContext;

const AuthProvider = ({ children }) => {
  const [isToken, setIsToken] = useState(false);
  const [error, setError] = useState("");
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  let [loading, setLoading] = useState(true);

  let loginUser = async (userLogin) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/token`,
        userLogin,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const { data } = response;

      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        setIsToken(true);
        return true;
      }
    } catch (error) {
      setError("Invalid User Name Or Password");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");

    setIsToken(false);
    // navigate("/login");
  };

  const updateToken = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/token/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      });

      let data = await response.json();

      if (response.status == 200) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        setIsToken(true);
      } else if (response.status == 401) {
        console.log(data);
        setIsToken(false);
      } else {
        setIsToken(false);
      }

      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      console.log("Network Error : ", error);
    }
  };
  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    isToken: isToken,
    error: error,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let forMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) updateToken();
    }, forMinutes);

    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("Auth Context was used of AuthContxt Provider  ");

  return context;
};

export { AuthProvider, useAuthContext };
