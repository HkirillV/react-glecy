import {useState} from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "@/store/store";
import Container from "@/components/Layouts/Container";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import HomePage from "@/components/Layouts/Page/HomePage";
import CatalogPage from "@/components/Layouts/Page/CatalogPage";
import NotFound from "@/components/Layouts/NotFound";

import "./styles"
import "./App.scss"

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!isOpen);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Container>
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage onClick={onClick} isOpen={isOpen}/>}/>
              <Route path="catalog" element={<CatalogPage/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
