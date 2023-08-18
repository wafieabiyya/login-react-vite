import { redirect } from "react-router-dom";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    const handleLogin = (event) =>{
        event.preventDefault()
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        window.location.href = "./product"
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                type="email"
                placeholder="email@gmail.com"
                name="email"
            />
            <InputForm
                label="Password"
                type="password"
                placeholder="*****"
                name="password"
            />
            <Button classname="bg-black w-full" type = "submit">Login</Button>
        </form>
    )
}

export default FormLogin;