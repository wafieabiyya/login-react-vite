import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";


{/* static rendering list*/ }

const products = [
	{
		id: 1,
		name: "Nike Shoes",
		image: "/img/fashion-shoes.jpg",
		description: "Sepatu Nike dengan type terbaru yang akan membuat anda semakin trendy setiap saat",
		price: 13000000
	},
	{
		id: 2,
		name: "Nike Shoes V2",
		image: "/img/fashion-shoes.jpg",
		description: "Sepatu Nike dengan type terbaru yang akan membuat anda semakin trendy setiap saat tanpa lelah dan tanpa malu",
		price: 2300000
	},
	{
		id: 3,
		name: "Adidas Running Shoes ",
		image: "/img/fashion-shoes.jpg",
		description: "Sepatu Adidas dengan type terbaru yang akan membuat anda semakin trendy setiap saat",
		price: 3000000
	}
]

const email = localStorage.getItem('email');
const ProductPage = () => {
	const [cart, setCart] = useState([])

	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		window.location.href = "/login"
	}

	const handleAddToCart = (id) => {
		//if product already in the cart then update the qty, else add new item into cart
		if (cart.find(item => item.id === id)) {
			setCart(
				cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
			)
		} else {
			setCart([...cart, { id, qty: 1 }])
		}
	}
	return (
		<Fragment>
			<div className="flex justify-end h-10 bg-slate-600 text-black items-center p-7">
				{email}
				<Button classname="bg-black ml-3" onClick={handleLogout}>Logout</Button>
			</div>
			<div className="flex justify-center py-5 mb-2">
				<div className="w-4/6 flex flex-wrap">
					{products.map((products) => (
						<CardProduct key={products.id}>
							<CardProduct.ProductImage image={products.image}></CardProduct.ProductImage>
							<CardProduct.ProductDetail name={products.name}>{products.description}</CardProduct.ProductDetail>
							<CardProduct.ProductFooter price={products.price} handleAddToCart={handleAddToCart} id={products.id} />
						</CardProduct>
					))}
				</div>
				<div className="w-2/4">
					<h1 className="text-3xl font-bold ml-5 my-2">Cart</h1>
					<table className="table-auto text-left border-separate border-spacing-5">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => {
								const product = products.find((product) => product.id === item.id)
								return (
									<tr key={item.id}>
										<td> {product.name}</td>
										<td> Rp{product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
										<td> {item.qty}</td>
										<td> Rp{(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</Fragment>
	)
}

export default ProductPage;