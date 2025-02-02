const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({})
        .select('name price')

    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts = async (req, res) => {
    const {featured, company, name, sort, fields} = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured;
    }
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = { $regex: name, $options: 'i'};
    }
    let result = Product.find(queryObject);

    //sort
    if(sort){
        const sortList = sort.split(',').join(' ');
        result.sort(sortList);
    }else{
        result.sort('createdAt');
    }
    //select
    if(fields){
        const fieldsList = fields.split(',').join(' ');
        result.select(fieldsList);
    }
    const page = Number(req.query.page)|| 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page -1) * limit;
    result.skip(skip).limit(limit);


    const products = await result;

    res.status(200).json({products, nbHits: products.length});
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}
