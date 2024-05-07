const products = [
    {
        id: '1',
        name: 'Motorola g20',
        price: 1000,
        category: 'smarthpone',
        img: 'https://armoto.vtexassets.com/arquivos/ids/161385-800-auto?v=637779817223370000&width=800&height=auto&aspect=true',
        stock: 40,
        description: 'Descripcion de Motorola'
    },
    {id: '2', name: "Samsung Galaxy A14", price: 750, category: 'smarthpone', img: 'https://startar.vtexassets.com/arquivos/ids/367078-800-auto?v=638505772776330000&width=800&height=auto&aspect=true'},
    {id: '3', name: "Joystick Xbox", price: 300, category: 'gaming', img: 'https://startar.vtexassets.com/arquivos/ids/368315-800-auto?v=638506587757730000&width=800&height=auto&aspect=true'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}
