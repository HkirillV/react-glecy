import {Outlet} from "react-router-dom";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

import "./LayoutPage.scss"

const LayoutPage = (props) => {
  const {
    onClick,
    isOpen,
  } = props;

  return (
    <main className="layout-page">
      <Header onClick={onClick} isOpen={isOpen}/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default LayoutPage