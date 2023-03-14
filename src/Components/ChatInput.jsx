import React from "react";
import { useState } from "react";

const ChatInput = ({sendMessage, loading}) => {

    const [value, setValue] = useState("")

    const handleSubmit = () => {
        if(value === "") return;
        sendMessage({sender: "user", message: value})
        setValue("")
    }

    return(
        <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg
            px-4 py-4 overflow-auto realtive">
            {loading ? 
            (<img src="./loader.gif" className="w-8 m-auto" />
            ) : (
                <>
                    <textarea
                    onKeyDown={(e) => {
                    e.keyCode === 13 && e.shiftKey === false && handleSubmit();
                    }}
                    rows={1}
                    className="inline-block border-0 bg-transparent outline-none w-11/12" 
                    value={value}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    />
                    <img
                    onClick={handleSubmit}
                    width={20} 
                    src="./send.png" className=" inline-block top-4
                    right-3 mx-1 hover:cursor-pointer ease-in duration-100 hover:scale-125"/>
                </>
                )
            }
        </div>
    )
}

export default ChatInput;