import React from "react";
import logo from './logo.svg';
import './App.css';

// useless comment


class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			poster: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	handleClick(e) {
		console.log('Hi there')
		fetch('http://localhost:5000/reqs', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Access-Control-Allow-Origin': '*'
			// 	'Content-Type': 'application/json'
			// 	// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: "text here" // body data type must match "Content-Type" header
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			console.log('this.state', this.state)
			this.setState({
				poster: data.data.message
			})
		});
	}
	
	render() {
  return (
    <div className="App">
      <button onClick={this.handleClick}>Click me</button>
			<h3>{ this.state.poster === null ? '' : this.state.poster}</h3>
    </div>
	);
	}
}

export default App;
