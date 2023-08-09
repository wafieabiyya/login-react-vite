import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.ProductImage image = "/img/fashion-shoes.jpg"></CardProduct.ProductImage>
                <CardProduct.ProductDetail title="Sepatu Fashion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, provident!</CardProduct.ProductDetail>
                <CardProduct.ProductFooter price = "Rp300.000,00"/>
            </CardProduct>
            <CardProduct>
                <CardProduct.ProductImage image = "/img/fashion-shoes.jpg"></CardProduct.ProductImage>
                <CardProduct.ProductDetail title="Sepatu Fashion">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque sit, placeat eos quasi, veritatis deserunt enim, tenetur modi corporis ipsum vero rerum suscipit consectetur laudantium!</CardProduct.ProductDetail>
                <CardProduct.ProductFooter price = "Rp300.000,00"/>
            </CardProduct>
        </div>
    )
}

export default ProductPage;