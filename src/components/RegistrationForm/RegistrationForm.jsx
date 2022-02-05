import s from "../RegistrationForm/style.module.css"

export default function RegistrationForm() {

    return (
        <>
            <form className={s.ContactForm}>
                <h4 className={s.FormTitle}>You are able to sign in with Google Account:</h4>
                <a href="" className={s.FormLink}><svg width="17" height="18"><use></use></svg>Google</a>
                <h4 className={s.FormSubTitle}> Or pass the user authentication using your account's login and password, prior to registration:</h4>
                <div className={s.wraper}>
                <label className={s.FormLabel} for="emailInput">Email:</label>
                    <input id="emailInput" type="email" placeholder="your@email.com" className={s.FormInput}/>                    
                
                <label className={s.FormLabel} for="passwordInput">Password:</label>
                <input id="passwordInput" type="password" placeholder="Password" className={`${s.FormInput} ${s.FormInputIndent}`} />
                <div className={s.wrap}>
                <button type="submit" className={s.btn}>Log in</button>
                <button type="button" className={s.btn}>Sign up</button>
                    </div>
                    </div>
            </form>
        </>
    )
    
};
