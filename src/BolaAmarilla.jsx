import { useState } from "react";

const BolaAmarilla = () => {

    const [color, setColor] = useState("gray");
    const [click, setClick] = useState(false)

    const changeColor = () => {
        if (!click) {
            setClick(true)
            setColor("purple")
        } else {
            setClick(false)
            setColor("gray")
        }

    }

    //bg-purple-400 bg-gray-400

    return (
        <>
            <div className="flex gap-4 h-full w-full m-10">
                <div className={"bg-" + color + "-400 w-40 h-40 rounded-full cursor-pointer"} onClick={changeColor}></div>
                <div className={"bg-" + color + "-400 w-40 h-40 rounded-full cursor-pointer"} onClick={changeColor}></div>
                <div className={"bg-" + color + "-400 w-40 h-40 rounded-full cursor-pointer"} onClick={changeColor}></div>
                <div className={"bg-" + color + "-400 w-40 h-40 rounded-full cursor-pointer"} onClick={changeColor}></div>
                <div className={"bg-" + color + "-400 w-40 h-40 rounded-full cursor-pointer"} onClick={changeColor}></div>
            </div>
        </>
    )
}

export default BolaAmarilla;