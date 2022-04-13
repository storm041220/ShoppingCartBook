const formatProduct = (product) => {
    return {
        _id: product._id,
        category: product.category,
        description: product.description,
        manufacturer: product.manufacturer,
        name: product.name,
        price: product.price,
        unitStock: product.unitStock,
        image: product.image,
        status: product.status,
        quantity: product.quantity
    }
}
module.exports = {
    formatProduct
}
