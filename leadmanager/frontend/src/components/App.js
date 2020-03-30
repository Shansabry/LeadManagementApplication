import React, {Component} from 'react'
import ReactDom from 'react-dom'


class App extends Component {
    render() {
        return <h1>React app</h1>// main render
    }
}

ReactDom.render(<App />, document.getElementById('app'))//points the index.html in template