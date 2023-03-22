import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}


export default App;









/*
        const products = [
    {name: 'laptop',price:"47000"},
    {name: 'phone' ,price:"75000"},
    {name: 'watch' ,price:"3500"},
    {name: "tablet",price:"5000"},
    {name: "iphone",price:"175000"}
  ]

   {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }

      <Product main="laptop" price="52000"></Product>
      <Product main="phone" price="750000"></Product>
      <Product main="watch" price="3500"></Product> 

*/