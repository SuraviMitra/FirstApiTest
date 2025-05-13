import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    // <>
    //   <h1>Hello World :)</h1>
    // </>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
