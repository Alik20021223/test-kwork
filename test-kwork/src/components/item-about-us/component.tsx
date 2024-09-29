import React from "react";

const ItemAboutUs = ({ props }) => {
    return (
        <>
            <div data-aos={props.animation}>
                <div className="bg-[#d9d9d9] flex justify-center flex-col items-center h-[273px] rounded-3xl">
                    <h1 className="text-7xl">{props.smile}</h1>
                    <h3 className="text-2xl text-black font-medium">{props.title}</h3>
                    <p className="text-slate-400 text-xl">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default ItemAboutUs