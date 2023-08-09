import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { children, title, type } = props

    return (
        <div className="flex justify-center min-h-screen items-center font-sans">
            <div className="w-full max-w-xs">
                <h1 className="text-white-500 text-3xl font-bold mb-2">{title}</h1>
                <p className="font-medium text-zinc-500 mb-4">
                    Welcome, please enter your details
                </p>
                {children}
                <Navigation type={type} />  {/* using if condition*/}

                {/* <p className="mt-5 text-center">
                    {type === 'login' ? "Don't have an account? " : "Already have an account?"}

                    {type === 'login' && (
                        <Link to="/register" className="font-bold text-zinc-400 ml-2">Sign up</Link>
                    )}
                    {type === 'register' && (
                        <Link to="/login" className="font-bold text-zinc-400 ml-2">Sign in</Link>
                    )}
                </p> */} {/* using tenarry and &&*/}
            </div>
        </div>
    )
}


const Navigation = ({ type }) => {
    if (type === 'login') {
        return (
            <p className="mt-5 text-center">
                Don't have an account?
                <Link to="/register" className="font-bold text-zinc-400 ml-2">Sign up</Link>
            </p>
        )
    } else {
        return (
            <p className="mt-5 text-center">
                Already have an account?
                <Link to="/login" className="font-bold text-zinc-400 ml-2">Sign in</Link>
            </p>
        )
    }
}
export default AuthLayout;