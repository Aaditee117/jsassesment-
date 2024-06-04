// create a variable to hold our beauty product collection
const beautyProducts = [];

// this function will take in some values as parameters, create a
// beauty product object using the parameters for its properties, and store
// it in the variable above.
function addProduct(name, brand, category, price) {
  const product = {
    "name": name,
    "brand": brand,
    "category": category,
    "price": price
  }
  beautyProducts.push(product);
  console.log("Added: " + name);
}

// create a "loop" that will go through the beauty product collection
// and print the details of each product with console.log()
function listProducts() {
  for (let i = 0; i < beautyProducts.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + beautyProducts[i].name);
    console.log("Brand: \t\t" + beautyProducts[i].brand);
    console.log("Category: \t" + beautyProducts[i].category);
    console.log("Price: \t\t$" + beautyProducts[i].price);
  }
}

// print the total number of beauty products in our collection to the console
function getTotalProducts() {
  console.log("\n" + beautyProducts.length);
}

// add some beauty products to our collection
addProduct("Retinol Serum", "The Ordinary", "Skincare", 7.90);
addProduct("Naked Palette", "Urban Decay", "Makeup", 54.00);
addProduct("Dry Shampoo", "Batiste", "Hair Care", 6.99);
listProducts();
getTotalProducts();
