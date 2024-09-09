import React from "react";
const Valid = ({ olf }) => {
    return <img onLoad={olf} src="./0_CThum.jpg"></img>;
};

const EventsEx = ({ olf, isvalid }) => {
    /* if (isvalid) {
        return <Valid olf={olf} />;
    } else {
        return "False";
    } */
    return isvalid && <Valid olf={olf} /> || "False";
};

export default EventsEx;
