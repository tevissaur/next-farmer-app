import { Cart, CartProduct } from "@prisma/client";

class UtilsService {
	calculateCartTotal(products: Array<CartProduct>) {
		try {
			if (products.length === 0) return 0;
			return products
				.map((prod) => prod?.price || 0)
				.reduce(
					(accumulator: number, currentValue: number) =>
						accumulator + currentValue
				);
		} catch (error) {
			console.error(error);
			return 0;
		}
	}

	isCartDuplicate(products: Array<CartProduct>, newItemId: string) {
		try {
			console.log(products, newItemId)
			if (products.length === 0) return false;
			for (let item of products)
				if (item.productId === newItemId) return true;

			return false;
		} catch (error) {
			return false;
		}
	}

	cleanCart(products: Array<CartProduct>) {
		if (products.length === 0) return products;

		return products.map((item: CartProduct) => ({
			price: item.price,
			quantity: item.quantity,
			createdAt: item.createdAt,
			productID: item.productId,
			farmID: item.farmId,
		}));
	}

	// getSearchParams(params: string) {
	// 	const paramsArr = params.split("&").map((param) => param.split("="));
	// 	let paramsObj: { fid: string; pid: string } = { fid: "", pid: "" };
	// 	for (let param of paramsArr) {
	// 		paramsObj = {
	// 			...paramsObj,
	// 			[param[0].replace("?", "")]: param[1],
	// 		};
	// 	}
	// 	return paramsObj;
	// }

	// cartItemsToArray(items) {
	//     let cart = []
	//     for (const product in items) {
	//         cart.push({ ...items[product], name: product })
	//     }
	//     return cart
	// }

	// getActivePage = () => window.location.pathname.split("/")[1];
}
export default new UtilsService();
