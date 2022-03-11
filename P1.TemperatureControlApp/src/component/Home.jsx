import React,{memo} from "react";

const Home= (props) =>{
    console.log("inner function",props.data);
    return(
        <div>
            <h1>react memo</h1>
        </div>
    );
};
export default memo(Home);