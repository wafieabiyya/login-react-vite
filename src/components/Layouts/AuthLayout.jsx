const AuthLayout = (props) => {
    const { children, title } = props

    return (
        <div className="flex justify-center min-h-screen items-center font-sans">
            <div className="w-full max-w-xs">
                <h1 className="text-white-500 text-3xl font-bold mb-2">{title}</h1>
                <p className="font-medium text-zinc-500 mb-4">
                    Welcome, please enter your details
                </p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;