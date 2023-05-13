import './Register.scss'
import React, {useState} from "react";
import {basePath, generate_token} from "../../Utils/GeneralUtils";
import Select from "react-dropdown-select";
import Base64 from "crypto-js/enc-base64";

export default function Register() {
    const [user, setUser] = useState({
        "firstName": "",
        "lastName": "",
        "gender": "",
        "mobileNumber": "",
        "email": "",
        "username": "",
        "password": "",
        "token": generate_token(32),
        "active": true
    })

    function checkUserParameters() {
        if (user.firstName === "" || user.lastName === "" || user.gender === "" || user.mobileNumber === "" || user.email === "" || user.username === "" || user.password ==="") {
            alert("Please fill in all the fields!")
            return false
        }
        return true
    }


    function registration() {
        if (checkUserParameters()) {
            console.log(user)
            // implement registration from backend
            fetch(basePath + '/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            }).then(response => {
                console.log(response)
            })
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
                           value={user.firstName} onChange={(event) => {
                        setUser({
                            ...user,
                            "firstName": event.target.value
                        })
                    }} required/>
                    <input className={'register-input'} type={"text"} name={"last name"} placeholder={"last name"}
                           value={user.lastName} onChange={(event) => {
                        setUser({
                            ...user,
                            "lastName": event.target.value
                        })
                    }} required/>
                    <Select className={'register-input'} placeholder={'gender'} options={[{
                        value: 'male',
                        label: "Male"
                    },
                        {
                            value:  'female',
                            label: "Female"
                        }]} onChange={(values) => {
                        console.log(values[0].value);
                        setUser({
                            ...user,
                            "gender": values[0].value
                        })
                    }} />
                    <input className={'register-input'} type={"text"} name={"last name"} placeholder={"mobile number"}
                           value={user.mobileNumber} onChange={(event) => {
                        setUser({
                            ...user,
                            "mobileNumber": event.target.value
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