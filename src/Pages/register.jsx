import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            <p className="mt-5 text-center">
                Already have an account?
                <Link to="/login" className="font-bold text-zinc-400 ml-2">Sign In</Link>
            </p>
        </AuthLayout>
    )
}

export default RegisterPage