import Button from "../Elements/Button/Button"

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-white border-gray-400 rounded-lg shadow mx-3 flex flex-col justify-between">
            {children}
        </div>
    )
}

const ProductImage = (props) => {
    const {image} = props
    return (
        <a href="#">
            <img src={image}
                alt="Product"
                className="p-8 rounded-t-lg" />
        </a>
    )
}

const ProductDetail = (props) => {
    const {name, children} = props
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl text-black tracking-tight font-bold">
                    {name}
                </h5>
                <p className="text-s text-gray-700 py-2">{children}</p>
            </a>
        </div>
    )
}

const ProductFooter = (props) => {
    const {price} = props
    return (
        <div className="flex items-center justify-between px-5 py-5">
            <span className="text-xl text-gray-500">{price}</span>
            <Button classname="bg-blue-700" >Add To Cart</Button>
        </div>
    )
}

CardProduct.ProductImage = ProductImage
CardProduct.ProductDetail = ProductDetail
CardProduct.ProductFooter = ProductFooter
export default CardProduct