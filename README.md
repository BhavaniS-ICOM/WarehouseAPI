# Warehouse API
   
## Run the server
 `npm start` Run the command in the terminal to start the server

## API

### getAllProducts
Get all the products and their article inventory

### sellProduct
Express is used to create routes
`/getAllProducts` - Read all the products from products.json
`/sellProduct` - Remove the product and update the article inventory accordingly 


### Improvements
1. The current solution donot check for article stock running out into negatives which can be restricted further based on business rules
2. Test cases developed only for fileReader service, but can be improved further for rest of scripts with mock data
   
### Considerations
sellProduct is developed based on assumption that the product is removed and need to update in the products.json file in synchronous way. The same applies for updateInventory


