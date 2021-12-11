import React,{ useState, useEffect, useRef }  from 'react'
import io from "socket.io-client"

export default function Messages() {

    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('http://localhost:8000/');
    
        socketRef.current.on("your id", id => {
          setYourID(id);
        })
    
        socketRef.current.on("messageX", (message) => {
          receivedMessage(message);
        })
        
    }, []);
    
    const receivedMessage = (message) => {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }
    
    const sendMessage = e => {
        e.preventDefault();        
        const messageObject = {
          body: message,
          id: yourID,
        };
        console.log(messageObject);
        setMessage("");
        socketRef.current.emit("send message", messageObject);
    }
    
    const handleChange = (value) =>{
        setMessage(value);
    }

    return (
        <div id="chat-socket">
            <div className="row">
                <div className="col">
                    <div className="card card-custom mb-3">
                        <div className="card-header">
                            <h3 className="card-title">
                                Receive
                            </h3>
                        </div>
                        <div className="card-body" style={{height:"100px", overflow:"auto"}}>
                        {messages.map((message, index) => {
                            if (message.id === yourID) {
                                return (
                                    <div key={index} className="bg-info rounded m-2 p-3 text-right">
                                        <span className="text-white">{message.body}</span>
                                    </div>                                
                                )
                            }
                            return (
                                <div key={index} className="bg-light-info rounded m-2 p-3 text-left">
                                    <span className="text-info">{message.body}</span>
                                </div>  
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <form method="post" id="form-chat" onSubmit={(e)=>sendMessage(e)}>
                        <div className="form-group mb-3">
                            <label>Messages</label>
                            <textarea name="chat" className="form-control" value={message} onChange={(e)=>handleChange(e.target.value)} ></textarea>
                        </div>
                        <button className="btn btn-primary pull-right" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
