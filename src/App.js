import Header from "./components/Header/Header.jsx";
import Products from "./components/ProductCard/ProductsList.jsx";
import { products, categories } from "./components/helper/data.js";

function App() {
  console.log(products);
  return (
    <div>
      <Header categories={categories} text="Products List" />
      <Products products={products} />
    </div>
  );
}

export default App;
