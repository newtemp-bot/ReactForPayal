import React from "react";
import { Blogs, Contact, Error, Home, Layout } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>

                    <Route index element={<Home />}></Route>
                    <Route path="blogs" element={<Blogs />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="*" element={<Error />}></Route>
        
                  </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
