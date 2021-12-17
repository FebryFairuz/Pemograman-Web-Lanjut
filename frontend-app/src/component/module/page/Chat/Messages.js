import React,{ useState, useEffect, useRef }  from 'react'
import io from "socket.io-client"
import jwt_decode from "jwt-decode"

export default function Messages() {

    var AuthToken = localStorage.getItem("AuthToken");
    const AuthDecode = ((AuthToken) ? jwt_decode(AuthToken) : []);    

    const [yourID, setYourID] = useState(AuthDecode.result.Username);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('http://localhost:8000/');
    
        // socketRef.current.on("your id", id => {
        //   setYourID(id);
        // })
    
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
          id: AuthDecode.result.Username,
        };
        console.log(messageObject);
        setMessage("");
        socketRef.current.emit("send message", messageObject);
    }
    
    const handleChange = (value) =>{
        setMessage(value);
    }

    return (
        <div className="new-chat">
            <div className="card card-custom card-stretch gutter-b border-0">
                <div className="card-header bg-primary bg-opacity-25 border-0">
                    <h3 className="card-title">
                        User
                    </h3>
                </div>
                
                <div className="card-body bg-primary bg-opacity-10" style={{height:"500px", overflow:"auto"}}>
                    {messages.map((message, index) => {
                        if (message.id === yourID) {
                            return (
                                <div key={index} className="m-2 text-end">
                                    <div className='bg-info bg-opacity-50 rounded' style={{display:"inline-block",padding:"10px 10px 10px 100px"}}>
                                        <p className='text-white fw-bold m-0'>{message.id}</p>
                                        <span className="text-white">{message.body}</span>
                                    </div>
                                </div>             
                            )
                        }
                        return (
                            <div key={index} className="m-2 text-start">
                                <div className='bg-primary bg-opacity-50 rounded' style={{display:"inline-block",padding:"10px 100px 10px 10px"}}>
                                    <p className='text-white fw-bold m-0'>{message.id}: </p>
                                    <span className="text-white">{message.body}</span>
                                </div>
                            </div>  
                        )
                    })}
                </div>

                <div className="card-footer bg-primary text-dark bg-opacity-25 border-0">
                    <form method="post" id="form-chat" onSubmit={(e)=>sendMessage(e)}>
                        <div className="row">
                            <div className="col-11 ">
                                <textarea name="chat" className="form-control border-primary pr-1" rows="1" value={message} onChange={(e)=>handleChange(e.target.value)} placeholder='type a message' ></textarea>
                            </div>
                            <div className="col-1 p-0">
                                <button className="btn btn-primary pull-right col-12" type="submit">Send</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}
