import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const initialState = {
    isLoading: false,
    token: {},
    error: "",
  };
};

export default useLogin;
