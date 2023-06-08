import "./App.css";

import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Slider />
      <Footer></Footer>
    </div>
  );
}

export default App;
