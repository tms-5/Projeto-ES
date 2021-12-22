import React, { useEffect, useState } from "react";
import db from "../Axios/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [nivelUser, setNivelUser] = useState("");

  useEffect(() => {
    async function conferirNivelUsuario() {
      const docRef = doc(db, "usuarios", currentUser.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setNivelUser("usuario");
      } else {
        setNivelUser("hemocentro");
      }
    }
    if (currentUser) {
      conferirNivelUsuario();
    } else {
      setNivelUser("");
    }
  }, [currentUser]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  //if (pending) {
  //  return <>Please wait...</>;
  //}
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        nivelUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
