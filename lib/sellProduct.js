const readProducts = require("./fileReader");
const updateInventory = require("./updateInventory");
const fileWriter = require("./fileWriter");
/*
 * Pick up product to be removed from request
 * Update inventory on articles & Remove product from  list
 * @returns response
 */

const sellProduct = async (req, res) => {
  try {
    const productsList = readProducts("products.json");

    if (productsList != null && productsList.products != undefined) {
      const inventoryToUpdate = productsList.products.filter(
        (product) => product.name === req.body.name
      );
      const productAvailable = inventoryToUpdate.length;

      if (productAvailable > 0) {
        updateInventory(
          inventoryToUpdate[0].contain_articles,
          "inventory.json"
        );
        const updateProducts = productsList.products.filter(
          (product) => product.name !== req.body.name
        );
        updateList = { products: updateProducts };
        fileWriter("products.json", updateList);
        res.json(req.body.name + "  removed/sold out");
      } else {
        res.status(204).end();
      }
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports = sellProduct;
