import FormLogin from "../components/Fragments/FormLogIn"
import AuthLayout from "../components/Layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type = "login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage