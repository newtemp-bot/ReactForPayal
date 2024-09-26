import { memo } from "react";

const ChildCompo = ({ onClick }) => {
    console.log("Children Render");
    return <button onClick={onClick}>Increment</button>;
};
export default memo(ChildCompo);
