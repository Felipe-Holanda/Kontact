import { createContext, useState, useCallback, PropsWithChildren } from 'react';
import api from '../services/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
    secondaryPhone: string;
    secondaryEmail: string;
    sharing: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface SignUpCredentials {
    name: string;
    email: string;
    phone: string;
    password: string;
}

interface UserContextData {
    user: User;
    token: string;
    signIn: (data: SignInCredentials) => Promise<void>;
    signUp: (data: SignUpCredentials) => Promise<void>;
    signOut: () => void;
    updateUser: (user: User) => Promise<void>;
    updatePrivacy: () => Promise<void>;
    deleteProfile: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextData);


export const UserProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const signIn = useCallback(async ({ email, password }) => {
        try {
            const response = await api.post('/login', {
                email,
                password,
            });

            const { token } = response.data;

            setToken(token);

            api.defaults.headers.authorization = `Bearer ${token}`;

            const userResponse = await api.get('/users');

            setUser(userResponse.data);
            toast.success('Login realizado com sucesso!');
            navigate('/home');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, []);

    const signUp = useCallback(async ({ name, email, phone, password }) => {

        try {
            const response = await api.post('/users', {
                name, email, phone, password
            })

            const attempLogin = await api.post('/login', {
                email,
                password
            });

            const { token } = attempLogin.data;

            setToken(token);
            setUser(response.data)
            navigate('/home');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, [])

    const signOut = useCallback(() => {
        setUser(null);
        setToken(null);
        navigate('/');
        api.defaults.headers.authorization = undefined;
    }, [])

    const updateUser = useCallback(async (user) => {
        try {
            const response = await api.patch('/users', user);
            setUser(response.data);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, [])

    const updatePrivacy = useCallback(async () => {
        try {
            const response = await api.put('/users');
            setUser(response.data);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, [])

    const deleteProfile = useCallback(async () => {
        try {
            await api.delete('/users');
            signOut();
            toast.success('Conta excluída com sucesso! Sentiremos saudades!');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, [])

    return (
        <UserContext.Provider value={{
            user, token, signIn, signUp, signOut, updateUser, updatePrivacy, deleteProfile
        }}>
            {children}
        </UserContext.Provider>
    )
}