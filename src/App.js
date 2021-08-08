import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkform from './components/ImageLinkform/ImageLinkfrom';
import Rank from './components/Rank/Rank'

class App extends Component {
	constructor(){
		super();
		this.state={
			input:'',
		}
	}
	onInputchange=(event)=>{
		console.log(event.target.value); //to get input value in console
	}
	onSubmit=()=>{
		console.log("Click");
		
	}
  render() {
    return (
      <div className="App">
        <Particles className='particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 250,
	            "density": {
	                "enable": true,
                  "value_area":800
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 6,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 3,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 10,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
        
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkform onInputchange={this.onInputchange}  onSubmit={this.onSubmit}/>

        {/* <Facerecognition/> */}
      </div>
    );
  }
}

export default App;
