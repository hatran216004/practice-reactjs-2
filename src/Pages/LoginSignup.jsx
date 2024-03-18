import { useState } from 'react';
import './scss/LoginSignup.scss';

const LoginSignup = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div className="container">
            <div className="loginsignup">
                <div className="loginsignup-inner">
                    <h1>Sign up</h1>
                    <form action="" className="loginsignup-form" autoComplete="off">
                        <div className="loginsignup-form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter your name" id="name" />
                        </div>

                        <div className="loginsignup-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter your email address" id="email" />
                        </div>

                        <div className="loginsignup-form-group">
                            <label htmlFor="password">Pasword</label>
                            <input type="password" placeholder="Enter your password" id="password" />
                        </div>

                        <div className="loginsignup-agree">
                            <input type="checkbox" name="" id="" hidden checked={checked} />
                            <p onClick={() => setChecked(!checked)}>
                                By continuing, I agree to the terms of use & privacy policy
                            </p>
                        </div>

                        <button className="btn-submit">Continute</button>
                        <div className="loginsignup-form-row">
                            Already have an account ?<span>Login here</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
