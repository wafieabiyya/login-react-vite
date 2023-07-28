import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogIn"
import AuthLayout from "../components/Layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="mt-5 text-center">
                Don't have an account? 
                <Link to="/register" className="font-bold text-zinc-400 ml-2">Sign Up</Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage