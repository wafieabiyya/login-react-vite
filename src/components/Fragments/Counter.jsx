import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);{
            this.state = {
                count: 0
            }
        }
    }
    render() {
        return (
            <div className="flex justify-center bg-orange-500">
                <h1 className="mx-3">{this.state.count}</h1>
                <button className="bg-gray-800 text-white w-9" onClick={() => this.setState ({count: this.state.count +1})}>+</button>
            </div>
        )
    }
}
export default Counter