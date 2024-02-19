import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

interface IState {
    user: {email: string, password: string},
    isLogin: boolean,
    setIsLogin: (isLogin: boolean) => void
}


export const useStore = create<IState>()((set) => ({
    user: {email: 'usr@tana.com', password: 'password'},
    isLogin: false,
    setIsLogin: (isLogin: boolean) => set(() => ({isLogin: isLogin}))
}))