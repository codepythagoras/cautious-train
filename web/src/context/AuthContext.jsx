import axios from "axios";
import * as React from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setuser] = React.useState(null);

  React.useEffect(() => {
    if (user) {
      document.tidioIdentify = {
        distinct_id: user._id,
        email: user.email,
        name: user.username,
      };
    }
  }, [user]);

  const setUser = React.useCallback((data) => {
    setuser(data);

    localStorage.setItem("user", JSON.stringify(data));
  }, []);

  const logout = React.useCallback(() => {
    setuser(null);
    localStorage.setItem("user", null);
  }, []);

  const localUser = localStorage.getItem("user");
  React.useEffect(() => {
    // console.log(localUser);
    if (localUser !== null && localUser !== undefined) {
      checkIfUserISValid(localUser).then((res) => {
        if (res !== null && res.status === 200) {
          setUser(res.data);
        }
      });
    }
  }, [setUser, localUser]);

  const checkIfUserISValid = (localUser) => {
    const user = JSON.parse(localUser);

    if (!user) {
      return new Promise((res, rej) => {
        res(null);
      });
    }

    return axios.get(
      `https://cryptoboomserver.onrender.com/auth/getUser?_id=${user._id}`
      // `https://cryptoboomserver.onrender.com/auth/getUser?_id=${user._id}`
    );
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
