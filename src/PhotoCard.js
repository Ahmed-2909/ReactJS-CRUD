import React from "react";

const PhotoCard = (props) => {
    const deleteHandler = () => {
        props.onRemove();
    }
    return (
        <div className="bg-white w-3/5 h-fit mx-auto sm:2/5 lg:w-1/5  rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] lg:ml-32 p-6 ">
            <img src={props.img} alt="no  img" className="rounded-full mx-auto  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-1/2 my-8" />
            <h2 className="font-mono font-bold text-xs sm:text-lg lg:text-2xl mx-2 p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">Name: {props.name}</h2>
            <h2 className="font-mono font-bold text-xs sm:text-lg lg:text-2xl mx-2 p-2 mb-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">PhoneNumber: {props.phoneNumber}</h2>
            <div className="flex justify-center">
                <button type="button" onClick={deleteHandler}
                    className="bg-white rounded-full p-4 text-red-500 font-bold font-mono shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] hover:bg-red-500 hover:text-white "
                >Remove</button>
            </div>
        </div>
    );


};
export default PhotoCard;