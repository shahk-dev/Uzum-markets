import Home from "./pages/Home";
import Layout from "./Layouts/Layout";
import Prodecst from "./pages/Producst";
import Container from "./pages/Container";
import Likeing from "./pages/Likeing";
import Categorya from "./pages/Categorya";
import Login from "./features/auth/Login";
import Notfound from "./components/Notfound";
import { Route , Routes } from "react-router-dom";
function App() {

  return (
    <>
         <Routes>
                <Route path="/" element={<Layout><Home/></Layout>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/prodecst" element={<Layout><Prodecst/></Layout>} />
                <Route path="/categorya" element={<Layout><Categorya/></Layout>} />
                <Route path="/likeing" element={<Layout><Likeing/></Layout>} />
                <Route path="/containers" element={<Layout><Container/></Layout>} />
                <Route path="*" element={<Layout><Notfound/></Layout>} />
         </Routes>
    </>
  )
}

export default App
