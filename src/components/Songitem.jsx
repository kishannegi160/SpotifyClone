import React from "react";

const Songitem = ({name,image,decs,id})=>{

    return(
        <div className="min-w-[165px] p-2 px-3 rounded curson-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{decs}</p>
        </div>
    )
}

export default Songitem