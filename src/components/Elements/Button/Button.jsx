 const Button = (props) => {
    const {children, classname} = props;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
        {children}
      </button>
    )
  }

  export default Button;