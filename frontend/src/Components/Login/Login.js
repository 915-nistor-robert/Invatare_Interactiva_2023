import './Login.scss'
import {loginText} from "../../Utils/GeneralUtils";
import { BsFacebook} from "react-icons/bs";
import {AiFillGoogleCircle} from "react-icons/ai"

export default function Login() {
    return (
        <>
            <div className={'login-main-container'}>
                <div className={'login-title'}>
                    {loginText.title}
                    {loginText.description}
                </div>
                <div className={'login-input-container'}>
                    <form className={'login-form'}>
                        <input className={'login-input'} type={"text"} name={"username"} placeholder={"e-mail or username"}/>
                        <input className={'login-input'} type={"password"} name={"password"} placeholder={"password"}/>
                    </form>
                    <div className={'forgot-password-text'}>
                        {loginText.forgotPassword}
                    </div>
                </div>
                <a className={'login-button'} href={'/notes'} target={''}>Login</a>

                <div className={'register-text'}>
                    {loginText.register}
                </div>
                <a className={'register-button'} href={'/register'} target={''}>Register now</a>
                <div className={'login-icons'}>
                    <BsFacebook className={'login-icon'}/>
                    <AiFillGoogleCircle className={'login-icon'}/>
                </div>
            </div>
        </>
    )
}