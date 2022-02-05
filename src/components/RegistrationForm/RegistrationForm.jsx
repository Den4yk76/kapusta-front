import s from "../RegistrationForm/style.module.css"

export default function RegistrationForm() {

    return (
        <>
            <form className={s.ContactForm}>
                <h4 className={s.FormTitle}>Вы можете авторизоваться с помощью Google Account:</h4>
                <a href="" className={s.FormLink}><svg width="17" height="18"><use></use></svg>Google</a>
                <h4 className={s.FormSubTitle}>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</h4>
                <div className={s.wraper}>
                <label className={s.FormLabel} for="emailInput">Электронная почта:</label>
                    <input id="emailInput" type="email" placeholder="your@email.com" className={s.FormInput}/>                    
                
                <label className={s.FormLabel} for="passwordInput">Пароль:</label>
                <input id="passwordInput" type="password" placeholder="Пароль" className={`${s.FormInput} ${s.FormInputIndent}`} />
                <div className={s.wrap}>
                <button type="submit" className={s.btn}>Войти</button>
                <button type="button" className={s.btn}>Регистрация</button>
                    </div>
                    </div>
            </form>
        </>
    )
    
};
