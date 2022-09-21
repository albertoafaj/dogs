import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {

    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoding] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

 

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options)
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoding(true)
            const { url, options } = TOKEN_POST({ username, password });
            const tokenRes = await fetch(url, options)
            if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`)
            const json = await tokenRes.json();
            window.localStorage.setItem('token', json.token);
            await getUser(json.token);
            navigate('/conta')
            
        } catch (err) {
            setError(err.message)
            setLogin(false)
        } finally {
            setLoding(false);
        }
    }

    const userLogout = React.useCallback(async function () {
        setData(null);
        setError(null);
        setLoding(false);
        setLogin(false);
        window.localStorage.removeItem('token');
        navigate('/login')
    }, [navigate])

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoding(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options)
                    if (!response.ok) throw new Error('Token inválido')
                    await getUser(token)
                } catch (error) {
                    userLogout()
                } finally {
                    setLoding(false)

                }
            }

        }
        autoLogin();
    }, [userLogout])
    
    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
            {children}
        </UserContext.Provider>
    )
}
