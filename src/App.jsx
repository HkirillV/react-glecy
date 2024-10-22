import React from "react";
import {useState} from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "@/store/store";
import Container from "@/components/Layouts/Container";
import LayoutPage from "@/components/Layouts/LayoutPage";
import HomePage from "@/components/Layouts/HomePage";
import CatalogPage from "@/components/Layouts/CatalogPage";
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
            <Routes>
              <Route path="/" element={<LayoutPage onClick={onClick} isOpen={isOpen}/>}>
                <Route index element={<HomePage onClick={onClick} isOpen={isOpen}/>}/>
                <Route path="catalog" element={<CatalogPage/>}/>
              </Route>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
