import React from 'react';
import Products from './components/Products';
import data from './data.json';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:""
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              Cart list
            </div>
          </div>
        </main>
        <footer>
          All Right Is reserved
        </footer>
      </div>
    );
  }
//feature-1
function App() {
  return (
  <div className="grid-container">
    <header>
      <a href="/">Shopping Cart</a>
    </header>
    <main>
      Product List
    </main>
    <footer>
      All Right Is reserved
    </footer>
  </div>
  );
}

export default App;
