import React from "react";
import { CardTwo } from "./CardTwo";

const App = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <CardTwo title="Ashok" desc="Hii this the my description." btnText="Click"/>
            <CardTwo  desc="Hii this the my description." btnText="Click"/>
            <CardTwo/>
        </div>
    );
};

export default App;
