import React, { Component } from 'react'
import Messages from "./Messages";

export class Chat extends Component {
    render() {
        return (
            <div id="chat-socket">
                <Messages />
            </div>
        )
    }
}

export default Chat;
