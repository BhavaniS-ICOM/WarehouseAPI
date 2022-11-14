const fileWriter = require("./fileWriter");
/*
 * Update Inventory based on the product removed
 */
module.exports = (removeInventory, invFileName) => {
  removeInventory.forEach((article) => {
    const art_id = article.art_id;
    const itemIndex = articles.inventory.findIndex(
      (item) => item.art_id === art_id
    );

    articles.inventory[itemIndex].stock = (
      articles.inventory[itemIndex].stock - article.amount_of
    ).toString();
  });
  //console.log(articles);
  fileWriter(invFileName, articles);
};
