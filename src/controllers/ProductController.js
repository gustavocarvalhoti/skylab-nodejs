const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async getAll(request, response) {
        // Get on the URL - default 1
        // http://localhost:3001/api/products?page=3
        const {page = 1} = request.query;
        const paginate = {page, limit: 10};

        //const where = {"title": "Curso Java 400001"};
        const where = {};

        // Product.paginate({where}, {paginate})
        const products = await Product.paginate(where, paginate);
        return response.json(products);
    },
    async store(request, response) {
        const product = await Product.create(request.body);
        return response.json(product);
    },
    async detail(request, response) {
        const product = await Product.findById(request.params.id);
        return response.json(product);
    },
    async update(request, response) {
        // {new: true} - return the object updated
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true});
        return response.json(product);
    },
    async destroy(request, response) {
        await Product.findByIdAndRemove(request.params.id);
        return response.send();
    },
};