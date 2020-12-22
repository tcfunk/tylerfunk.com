import React from "react";


import SiteHeader from "../components/header/header"
// import '../pages/index.css';
import layoutClasses from './layout.module.scss';



export default function Layout({ children }) {
  return (
    <div className={layoutClasses.layoutContainer}>

      <SiteHeader />

      {children}

      <footer className="flex flex-row text-center justify-center py-4 bg-blue-100">
        <div>
          footer things
        </div>
      </footer>
    </div>
  )
}