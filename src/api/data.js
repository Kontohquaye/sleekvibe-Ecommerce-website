export const productsData = async () => {
  const data = await fetch("https://ecommerce-api-pet6.onrender.com/products");
  return data.json();
};
