import React from "react";

import Info from "./info";
import About from "./about";
import Interests from "./interests";
import Footer from "./footer";



 export default function App() {
    return (
        <div id="app">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
 }