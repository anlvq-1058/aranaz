import logo from './logo.svg';
import './sass/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/owl.carousel.min.css';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  );
}

export default App;
