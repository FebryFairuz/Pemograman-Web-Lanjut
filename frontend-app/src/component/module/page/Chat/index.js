import React, { Component } from 'react'
import Messages from "./Messages"
import ListChat from "./ListChat";

export class Chat extends Component {
    render() {
        return (
            <div className="container-fluid pt-3">
                <div className="row">
                    <div className="col-4 pr-0">
                        <ListChat />
                    </div>
                    <div className="col-8 pl-0">
                        <Messages />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Chat;
