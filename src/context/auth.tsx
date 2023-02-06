import { ReactNode } from "react"
import { createContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { IpropsChildren } from "../../@types/tipagem";
import { auth } from "../services/Firebase.config";



export const AuthContext = createContext({})

export default function AuthProvider ({ children }:IpropsChildren){ 

    const [user, loading, error] = useAuthState(auth);

    return (
        <AuthContext.Provider value={{ user, loading, error }}>
           {children}
        </AuthContext.Provider>
    )
}