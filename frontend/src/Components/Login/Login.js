import './Login.scss'
import {basePath, loginText} from "../../Utils/GeneralUtils";
import {BsFacebook} from "react-icons/bs";
import {AiFillGoogleCircle} from "react-icons/ai"
import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

// Create the UserContext
export const UserContext = createContext();
export default function Login() {
    const navigate = useNavigate();
    const [userCredentials, setUserCredentials] = useState({
        username: "",
        password: ""
    })
    const [user, setUser] = useState(null)

    const checkEmptyFields = () => {
        if (userCredentials.username === "" || userCredentials.password === "") {
            alert("Please fill in all the fields!")
            return false
        }
        return true
    }

    const login = async () => {
        if (checkEmptyFields()) {
            // Get the logged user
            sessionStorage.setItem("username", userCredentials.username);
            // try {
            //     const response = await fetch(basePath + `/userByUsername?username=${userCredentials.username}`, {
            //         headers: {
            //             Accept: 'application/json',
            //         },
            //     });
            //
            //     if (!response.ok) {
            //         throw new Error('Request failed with status ' + response.status);
            //     }
            //
            //     const data = await response.json();
            //     setUser(data);
            // } catch (error) {
            //     console.error(error);
            //     return null;
            // }
            try {
                var response = await fetch(basePath + '/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username": "wilsod",
                        "password": "password321"
                    }),
                })
                navigate('/notes')
                console.log(response)
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    }

    return (
        <UserContext.Provider value={{user}}>
            <div className={'login-main-container'}>
                <div className={'login-title'}>
                    {loginText.title}
                    {loginText.description}
                </div>
                <div className={'login-input-container'}>
                    <form className={'login-form'}>
                        <input className={'login-input'} type={"text"} name={"username"} placeholder={"username"}
                               value={userCredentials.username} onChange={(event) => {
                            setUserCredentials({
                                ...userCredentials,
                                "username": event.target.value
                            })
                        }}/>
                        <input className={'login-input'} type={"password"} name={"password"} placeholder={"password"}
                               value={userCredentials.password} onChange={(event) => {
                            setUserCredentials({
                                ...userCredentials,
                                "password": event.target.value
                            })
                        }}/>
                    </form>
                    <div className={'forgot-password-text'}>
                        {loginText.forgotPassword}
                    </div>
                </div>
                <div className={'login-button'} onClick={login}>Login</div>

                <div className={'register-text'}>
                    {loginText.register}
                </div>
                <a className={'register-button'} href={'/register'} target={''}>Register now</a>
                <div className={'login-icons'}>
                    <BsFacebook className={'login-icon'}/>
                    <AiFillGoogleCircle className={'login-icon'}/>
                </div>
            </div>
        </UserContext.Provider>
    )
}