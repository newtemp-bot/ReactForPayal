import React, { lazy, Suspense } from "react";
import { Blogs, Contact, Error, Home, Layout } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const Prodcuts = lazy(() => delayForDemo(import('./pages/Products')));
    return (
        <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>

                    <Route index element={<Home />}></Route>
                    <Route path="blogs" element={<Blogs />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="products" element={<Suspense fallback={<>Lodading...</>}>
                      <Prodcuts/>
                    </Suspense>}></Route>
                    <Route path="*" element={<Error />}></Route>

                  </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
