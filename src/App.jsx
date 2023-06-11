import "./App.css";

import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductContainer from "./components/Container";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Slider />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default App;
