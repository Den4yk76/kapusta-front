import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { register, logIn } from "../../redux/auth/auth-operations"


const SignUpForm = validate => {
    const dispatch = useDispatch();    
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
     
    const submit = () => {
        
    };

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setFormErrors(validate(values));
    };   
    

    const handleSubmit = (e) => {
        e.preventDefault();        
        if (validate(values).email || validate(values).password) {
            return                           
        } 
        dispatch(register(values));         
        setIsSubmitting(true);             
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();               
        }
                
    }, [formErrors, isSubmitting, submit,]);

    const handleLogin = (e) =>{
        e.preventDefault();
        if (validate(values).email || validate(values).password) {
            return                           
        }
        dispatch(logIn(values));        
        setIsSubmitting(true);
    };
    
    return {handleChange, handleSubmit, submit, formErrors, isSubmitting, handleLogin}
};
export default SignUpForm;