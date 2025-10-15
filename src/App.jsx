import './App.css'
// Remove index.css import since App.css now has all Tailwind directives
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './component/Landing';
 import Nav from './component/Nav';

function App() {
  return (
    <Router>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/store" element={<Store />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  )
}

export default App;