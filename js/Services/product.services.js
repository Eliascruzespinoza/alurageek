const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
    }),
})
.then((res) => res.json())
.catch((err) => console.log(err));
};

        const deleteProduct = (id) => {
            return fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE"
            })
            .then((res) => res.json())
            .catch((err) => console.log(err));
        };


export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,

}
