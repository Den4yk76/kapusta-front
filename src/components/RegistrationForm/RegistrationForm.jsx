import React from "react";
import GoogleSignIn from "./Google-Sign-in/gSignIn";
import SignUpForm from "./signUpForm";
import validate from "./validateInfo";
import s from "./style.module.css";

export default function RegistrationForm() {
  const {
    handleChange,
    handleSubmit,
    values,
    formErrors,
    isSubmitting,
    handleLogin,
  } = SignUpForm(validate);

        return (
            <form className={s.ContactForm} onSubmit={handleSubmit.bind(this)}>
                <h4 className={s.FormTitle}>You are able to sign in with Google Account:</h4>         
                <GoogleSignIn/>           
                <h4 className={s.FormSubTitle}>
                    Or pass the user authentication using your account's login and password, prior to registration:</h4>
                <div className={s.wraper}> 
                        
                <label className={s.FormLabel} htmlFor="emailInput">{formErrors.email && (<span className={s.validationDot}>*</span>)}Email:</label>
                <input id="emailInput"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className={s.FormInput}
                    value={values}
                    onChange={handleChange} />
                {formErrors.email && (<span className={s.error}>{formErrors.email}</span>)}                
                <label className={s.FormLabel} htmlFor="passwordInput">{formErrors.email && (<span className={s.validationDot}>*</span>)} Password:</label>
                <input id="passwordInput"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`${s.FormInput} ${s.FormInputIndent}`}
                    value={values}
                    onChange={handleChange}
                />
                    {formErrors.password && (<span className={s.error}>{formErrors.password}</span>)}                    
                    </div>
                {Object.keys(formErrors).length === 0 && isSubmitting && (<div className={s.logIn}>Log in to enter your account</div>)}
                <div className={s.wrap}>
                    <button className={s.btn} type='button' onClick={handleLogin}>Log in</button>
                    <button type="submit" className={s.btn}>Sign up</button>
                </div>
            </form>
        
    )
}
