import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                count: 0
            }
            console.log('constructor')
        }
    }
    componentDidMount() {
        this.setState({ count: 1 })
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
        if(this.state.count === 10){
            this.setState({count: 0})
            console.log('componentUpdated')
        }
    }
    render() {
        return (
            <div className="flex justify-center bg-orange-500">
                <h1 className="mx-3">{this.state.count}</h1>
                <button className="bg-gray-800 text-white w-9" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                {console.log('render')}
            </div>
        )
    }
}
export default Counter