import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './component/Landing';
// import Nav from './component/Nav'; // Uncomment when you have it

function App() {
  return (

    
    <Router>
      {/* Put your Nav inside Router */}
      {/* <Nav /> */}
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/store" element={<Store />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
 
  )
}

export default App;
