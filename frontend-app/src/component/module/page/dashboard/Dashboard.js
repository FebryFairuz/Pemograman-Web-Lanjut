import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="mt-5">Sticky footer with fixed navbar</h1>
                <p className="lead">Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code className="small">padding-top: 60px;</code> on the <code className="small">main &gt; .container</code>.</p>
                <p>Back to <a href="/docs/5.1/examples/sticky-footer/">the default sticky footer</a> minus the navbar.</p>
            </div>
        )
    }
}

export default Dashboard;