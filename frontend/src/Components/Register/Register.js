import './Register.scss'
import React, {useState} from "react";

export default function Register() {
    const [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "username": "",
        "password": ""
    })

    function checkUserParameters() {
        if (user.first_name === "" || user.last_name === "" || user.email === "" || user.username === "" || user.password === "") {
            alert("Please fill in all the fields!")
            return false
        }
        return true
    }


    function registration() {
        if (checkUserParameters()) {
            // implement registration from backend
            alert("Registration successful!")
        }
    }

    return (<>
        <div className={'register-main-container'}>
            <div className={'register-title'}>
                Register
            </div>
            <div className={'register-input-container'}>
                <form className={'register-form'}>
                    <input className={'register-input'} type={"text"} name={"first name"} placeholder={"first name"}
                           value={user.first_name} onChange={(event) => {
                        setUser({
                            ...user,
                            "first_name": event.target.value
                        })
                    }} required/>
                    <input className={'register-input'} type={"text"} name={"last name"} placeholder={"last name"}
                           value={user.last_name} onChange={(event) => {
                        setUser({
                            ...user,
                            "last_name": event.target.value
                        })
                    }} required/>
                    <input className={'register-input'} type={"text"} name={"e-mail"} placeholder={"e-mail"}
                           value={user.email} onChange={(event) => {
                        setUser({
                            ...user,
                            "email": event.target.value
                        })
                    }} required/>
                    <input className={'register-input'} type={"text"} name={"username"} placeholder={"username"}
                           value={user.username} onChange={(event) => {
                        setUser({
                            ...user,
                            "username": event.target.value
                        })
                    }} required/>
                    <input className={'register-input'} type={"password"} name={"password"} placeholder={"password"}
                           value={user.password} onChange={(event) => {
                        setUser({
                            ...user,
                            "password": event.target.value
                        })
                    }} required/>
                </form>

                <a className={'register-button'} onClick={registration}>Create new account</a>
                <a className={'login-button'} href={'/'}>Login</a>
            </div>
        </div>
    </>)
}