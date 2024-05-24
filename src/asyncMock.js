const products = [
    {
        id: '1',
        name: 'Motorola g20',
        price: 1000,
        category: 'smartphone',
        img: 'https://armoto.vtexassets.com/arquivos/ids/161385-800-auto?v=637779817223370000&width=800&height=auto&aspect=true',
        stock: 40,
        description: 'Descripción de Motorola'
    },
    {
        id: '2',
        name: "Auricular Kuiper",
        price: 750,
        category: 'audio',
        img: 'https://acdn.mitiendanube.com/stores/001/688/455/products/asas-e164fe1d9ee19a510216982685371078-640-0.png',
        stock: 50,
        description: 'Auricular Kuiper'
    },
    {
        id: '3',
        name: "Joystick Xbox",
        price: 300,
        category: 'gaming',
        img: 'https://images.fravega.com/f1000/5a4ba01d89206aea02e7385919f709bd.jpg',
        stock: 30,
        description: 'Descripción de Joystick Xbox'
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === productId);
            if (product) {
                resolve(product);
            } else {
                reject('Product not found');
            }
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category));
        }, 500);
    });
};