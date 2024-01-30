import Restaurant from "./Restaurant";
import { useState } from "react";
import obj from "../utils/data";
const Body=()=>{
    let [obje,setobje]=useState(obj);
    console.log(obje,"my name is shiva sai",setobje);
    return (
    <div className="body">
        <button className="search" onClick={
            ()=>{setobje(obje.filter((ob)=>ob.info.avgRating>3.8));
            }
        }>click me!</button>
        <div className="res-container">
            {obje.map((ob)=>(<Restaurant key={ob.info.id} resData={ob}/>))}
        </div>


    </div>
)}

export default Body;