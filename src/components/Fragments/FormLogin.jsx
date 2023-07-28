import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
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
            <Button classname="bg-black w-full" >Login</Button>
        </form>
    )
}

export default FormLogin;