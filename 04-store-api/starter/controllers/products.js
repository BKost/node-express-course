const Product = require("../models/product.js");

const getAllProductsStatic = async (req, res) => {
  try {
    const products = await Product.find({
      name: "vase table",
    });
    res.status(200).json({ products, nbHits: products.length });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = name;
  }

  console.log(queryObject);

  const products = await Product.find(queryObject);

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
