import './index.scss'
import {ArrowBottomRight, Quote} from "../icons";
import {FormEvent, useEffect, useState} from "react";
import {useStore} from "../store/useStore";
import {Navigate} from "react-router-dom";

const Login = () => {
    const user = useStore((state) => state.user);
    const setIsLogin = useStore((state) => state.setIsLogin);
    const isLogin = useStore((state) => state.isLogin);

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    // this state checking for inputs is not empty
    const [isEmptyError, setIsEmptyError] = useState({email: false, password: false})
    // this state checking for login and passwords is correct
    const [isWrongLogin, setIsWrongLogin] = useState(false)

    // onsubmit button function
    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        // this part need to after button clicked not to change to URL
        event.preventDefault()
        // here checking for email and password is not empty
        if(email && password){
            // in case password and email is correct it will change global status of login
            if(email === user.email && password === user.password){
                //in global shows that user passed login page
                setIsLogin(true)
                //closing error message
                setIsWrongLogin(false)
            }
            // other case there will show error text under inputs
            else{
                setIsWrongLogin(true)
            }
        } else{
            // here I could not write more clear code however it is still working :)
            // checking email and passwords is empty
            if(!password && !email){
                setIsEmptyError({email: true, password: true})
            }
            // checking only email for empty input
            else if(!email){
                setIsEmptyError({...isEmptyError, email: true})
            }
            // checking only password for empty input
            else if(!password){
                setIsEmptyError({...isEmptyError, password: true})
            }
        }
    }

    return !isLogin ? (
        <main className='login'>
            {/*left-content*/}
            <div className='content-left'>
                {/*content above blur*/}
                <div className="flex-col inner">
                    {/*quote icon */}
                    <Quote/>
                    {/*text container give smaller width*/}
                    <div className='text-container'>
                        <p>Those people who develop the ability to continuously acquire new and better forms of
                            knowledge that they can apply to their work and to their lives will be the movers and
                            shakers in our society for the indefinite future</p>
                        <h5>Brian Tracy</h5>
                    </div>
                    {/*arrow under right side*/}
                    <div className="flex justify-right">
                        <ArrowBottomRight/>
                    </div>
                </div>
                {/*blur under the content*/}
                <div className="blur"></div>
            </div>
            {/*right-content*/}
            <div className='content-right'>
                {/*gives basic styles and width for inner content*/}
                <div className='inner'>
                    {/*header text*/}
                    <h3>Login to your Account</h3>
                    {/*under header text*/}
                    <p className='subTitle'>with your registered Email Address</p>
                    {/*line after texts*/}
                    <div className="line"></div>
                    {/*form content*/}
                    <form onSubmit={onSubmit}>
                        {/*email*/}
                        <label className={isEmptyError.email? 'error wrong-animation': 'null'}>Email address*</label>
                        <input type="text" placeholder='Enter email address'
                               onChange={(e) => setEmail(e.target.value)}/>
                        {/*password*/}
                        <label className={isEmptyError.password? 'error wrong-animation': 'null'}>Enter password*</label>
                        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        {/*error massage of the inputs*/}
                        {isWrongLogin ? <p className='wrong-animation' style={{fontSize: 12, color: 'red', marginBottom: '15px !important'}}>please try: email: usr@tana.com ; password: password</p> : null}
                        {/*checkbox for remember password*/}
                        <div className='flex checkbox-container'>
                            {/*checkbox*/}
                            <label className="custom-checkbox">
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            {/*action of the checkbox*/}
                            <p>Remember my password</p>
                        </div>
                        {/*button for submit form*/}
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </main>
    ): <Navigate to={'/dashboard'}/>
}

export default Login