import React, { createContext, useContext, useEffect, useState } from "react";
import { ContextValues, UserType } from "../@Types/UserType";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AxiosError } from "axios";

export const AuthContext = createContext({} as ContextValues)

type ProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({children}:ProviderProps) => {

    const [user,setUser] = useState<UserType | null | string>(null)


    useEffect(() => {
      const loadingStoreData = () => {
        const storageUser = localStorage.getItem("@Auth:user");
        const storageToken = localStorage.getItem("@Auth:token");
  
        if (storageUser && storageToken) {
          setUser(storageUser);
        }
      };
      loadingStoreData();
    }, []);


    const signIn = async(email:string,password:string) => {
      try {
        const response = await api.post("/auth",{email,password})

        setUser(response.data)

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
        localStorage.setItem("@Auth:token", response.data.token);

        toast.success("Logado com sucesso!")
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data.message) {
          toast.error(error.response.data.message);
       }
      }
    }

    const signOut = () => {
      localStorage.removeItem("@Auth:user");
      localStorage.removeItem("@Auth:token");
      setUser(null)
    }

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signed: !!user,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  return useContext(AuthContext);
 };

