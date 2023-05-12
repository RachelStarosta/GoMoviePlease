import { useState } from "react";
import Input from "./form/input";
import {  useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
    /**
     * every component is responsible for its own state and no 
     * component knows about the other's states. So we need a way to lift the state
     * 
     */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const {setJwtToken } = useOutletContext();  
    const {setAlertClassName } = useOutletContext();  
    const {setAlertMessage } = useOutletContext();  

    //using a hook:
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass", email, password);


        if (email === "admin@example.com"){
            
            /**
             * Fake handle submit:
             */
            setJwtToken("abc");
            setAlertClassName("d-none");
            setAlertMessage("");
            navigate("/");   //navigates back to the homepage once login is successful
        } else {
            setAlertClassName("alert-danger");
            setAlertMessage("Invalid credential hello");
        }
    }
    return(
        
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit = {handleSubmit}>
                <Input 
                    title = "Email Address"
                    type = "email"
                    className = "form-control"
                    name = "email"
                    autoComplete = "email-new"
                    onChange = {(event)=> setEmail(event.target.value)}
                /> 
                 <Input 
                    title = "Password"
                    type = "password"
                    className = "form-control"
                    name = "password"
                    autoComplete = "password-new"
                    onChange = {(event)=> setPassword(event.target.value)}
                /> 

                <hr/>

                <input
                    type = "submit"
                    className = "btn btn-primary"
                    value = "Login"
                />
            </form>
        </div>
        
    )
}

export default Login;