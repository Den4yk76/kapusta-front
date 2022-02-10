import React from "react";
import SignUpForm from "./signUpForm";
import validate from "./validateInfo";
import s from "../RegistrationForm/style.module.css";
import googleImg from "../../static/logos/google_logo.png";



export default function RegistrationForm() {
    const { handleChange, handleSubmit, values, formErrors, isSubmitting, handleLogin } =
        SignUpForm(validate);
     
    return (
            
        <form className={s.ContactForm} onSubmit={handleSubmit.bind(this)}>

            <h4 className={s.FormTitle}>You are able to sign in with Google Account:</h4>
           <a href="" className={s.FormLink}><img src={googleImg} alt="" width="17" height="18" />Google</a>
            <h4 className={s.FormSubTitle}> Or pass the user authentication using your account's login and password, prior to registration:</h4>
            <div className={s.wraper}>
            
                <label className={s.FormLabel} htmlFor="emailInput">Email:</label>
                <input id="emailInput"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className={s.FormInput}
                    value={values}
                    onChange={handleChange} />
                {formErrors.email && (<span className={s.error}>{formErrors.email}</span>)}
                
                <label className={s.FormLabel} htmlFor="passwordInput">Password:</label>
                <input id="passwordInput"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`${s.FormInput} ${s.FormInputIndent}`}
                    value={values}
                    onChange={handleChange}
                />
                {formErrors.password && (<span className={s.error}>{formErrors.password}</span>)}
                {Object.keys(formErrors).length === 0 && isSubmitting && (<div className={s.logIn}>Log in to enter your account</div>)}
                <div className={s.wrap}>
                    <button className={s.btn} type='button' onClick={handleLogin}>Log in</button>
                    <button type="submit" className={s.btn} disabled={Object.keys(formErrors).length === 0 && isSubmitting}>Sign up</button>
                </div>
            </div>
        </form>
        
    )
        
}
