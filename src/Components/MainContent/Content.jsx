import React, {useContext} from "react";
import './Content.css';
import {Contexts} from "../../ContextAPI/Context";

function Content() {
    const { getConVal, setConVal, getKeyVal, setKeyVal } =
    useContext(Contexts);
    return (
        <div className = "content-main">
        
            {getConVal}
        </div>
    )
}
export default Content;