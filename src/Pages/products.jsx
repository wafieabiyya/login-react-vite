import CardProduct from "../components/Fragments/CardProduct";


{/* static rendering list*/ }

const products = [
    {
        id: 1,
        name: "Nike Shoes",
        image: "/img/fashion-shoes.jpg",
        description: "Sepatu Nike dengan type terbaru yang akan membuat anda semakin trendy setiap saat",
        price: "Rp1.300.000,00"
    },
    {
        id: 2,
        name: "Nike Shoes V2",
        image: "/img/fashion-shoes.jpg",
        description: "Sepatu Nike dengan type terbaru yang akan membuat anda semakin trendy setiap saat tanpa lelah dan tanpa malu",
        price: "Rp2.300.000,00"
    },
    {
        id: 3,
        name: "Adidas Running Shoes ",
        image: "/img/fashion-shoes.jpg",
        description: "Sepatu Adidas dengan type terbaru yang akan membuat anda semakin trendy setiap saat",
        price: "Rp300.000,00"
    }
]
const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((products) => (
                <CardProduct>
                    <CardProduct.ProductImage image={products.image}></CardProduct.ProductImage>
                    <CardProduct.ProductDetail name={products.name}>{products.description}</CardProduct.ProductDetail>
                    <CardProduct.ProductFooter price={products.price} />
                </CardProduct>

            ))}
        </div>
    )
}

export default ProductPage;