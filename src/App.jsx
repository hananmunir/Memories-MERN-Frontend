import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/navbar/Navbar";
import Auth from "./Components/Auth/Auth";
function App() {
  return (
    <BrowserRouter>
      <Container maxidth='lg'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/auth' exact element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
