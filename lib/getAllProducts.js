const readProducts = require("./fileReader");
/*
 * Get all the products from products.json
 */
const getAllProducts = async (req, res) => {
  try {
    const productsList = readProducts("products.json");
    productsList != null &&
    productsList.products != undefined &&
    productsList.products.length > 0
      ? res.json(productsList.products)
      : res.status(204).end();
  } catch (err) {
    res.json(err);
  }
};

module.exports = getAllProducts;
