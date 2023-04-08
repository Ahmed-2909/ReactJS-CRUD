import React from "react";

const Table = (props) => {
    console.log(props)
    const deleteHandler = () => {
        props.onDelete(props.id)
        // console.log(props.key)
    }
    const editHandler = () => {
        props.onEdit(props.id)
        console.log(props.id)
    }
    const photoHandler = () => {
        props.onPhoto(props.id)
        console.log("on tr click")
    }

    return (


        <tr className="border-b dark:border-neutral-500 ">

            <td class="whitespace-nowrap px-6 py-6  sm:text-lg lg:text-2xl font-mono  " onClick={photoHandler} >
                <img src={props.img} alt="no img" className="rounded-full w-44" />
            </td>
            <td class="whitespace-nowrap px-6 py-6  sm:text-lg lg:text-2xl font-mono " onClick={photoHandler} >{props.name}</td>
            <td class="whitespace-nowrap px-6 py-6  sm:text-lg lg:text-2xl font-mono" onClick={photoHandler}>{props.dateOfBirth}</td>
            <td class="whitespace-nowrap px-6 py-6  sm:text-lg lg:text-2xl font-mono" onClick={photoHandler}>{props.address}</td>
            <td class="whitespace-nowrap px-6 py-6  sm:text-lg lg:text-2xl font-mono" onClick={photoHandler}>{props.placeOfBirth}</td>
            <td class="whitespace-nowrap px-6 py-6  sm:text-lg lg:text-2xl font-mono" onClick={photoHandler}>{props.phoneNumber}</td>
            <td class="whitespace-nowrap px-6 py-6  sm:text-lg lg:text-2xl font-mono" >
                <button type="button"
                    className="bg-white rounded-full p-4 text-blue-500 font-bold font-mono shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:bg-blue-500 hover:text-white"
                    onClick={editHandler}>
                    Edit</button>
            </td>
            <td class="whitespace-nowrap px-6 py-6"><button type="button"
                className="bg-white rounded-full p-4 text-red-500 font-bold font-mono shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] hover:bg-red-500 hover:text-white "
                onClick={deleteHandler}
            >Delete</button>
            </td>
        </tr>

    );

};
export default Table;