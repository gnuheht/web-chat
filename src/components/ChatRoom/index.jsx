import { Database } from "firebase/database";
import React from "react";
import { useState , useEffect, useRef} from "react";
import { database, ref, push, onValue } from '../firebase/config'
export default function Chat({name}){
    const [inputMess,setInputMess] = useState("");
    const [messages,setMessages] = useState([]);
    const input = useRef();
    useEffect(() => {
        onValue(ref(database,'message'),data => {
            let getMsg = [];
            data.forEach( i => {
                getMsg.push(i.val());
            });
            setMessages(getMsg);
        })
    },[]);
    const handleSendMsg = () => {
        push(ref(database,'message'),{
            name:name,
            message:inputMess,
        });
        setMessages('')
        input.focus();
    };
    return(
        <div>
            <h1>Xin chao{name}</h1>
            <ul>
                {messages.map((msg, index) => {
                    return (
                        <li key={index}>
                            <span>{msg.name} : </span>
                            <span>{msg.message}</span>
                        </li>
                    )
                })}
            </ul>
            <input 
                type='text' 
                value={inputMess} 
                onChange={(e) => {
                    // console.log(e);
                        setInputMess(e.target.value)
                }}
                ref={input}
            />
            <button onClick={handleSendMsg}>Gui</button>
        </div>
    )
}