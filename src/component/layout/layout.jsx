import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({Children}){
    return(
        <> 
              <Header/>
              <div>{Children}</div>
              <Footer/>      
               
        </>
    )
}
export default Layout;