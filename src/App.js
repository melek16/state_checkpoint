
import './App.css';

import React, { Component } from 'react'


export default class App extends Component {
  state={
    fullName:"No Name Yet",bio:"Whatever",  profession:"Developer",imgSrc:"https://th.bing.com/th/id/R.bb146ebb3862cba428117f1a4a5ccb19?rik=ZBmnlAhi5VRMEg&pid=ImgRaw&r=0",
        show:true,
        
      }
   componentDidMount(){
     console.log("mounted")
   } 
  render() {
    return (
      <div className="App">
        <label className="switch">
                <input type="checkbox"     onClick={()=>this.setState({show:!this.state.show})}/>
                <span className="slider round"></span>
      </label>
      {this.state.show || (
        <div id="profile">
               
        <div id="img_div">
    <img id="iimg" src={this.state.imgSrc} alt="" style={{height:250,width:250}} onClick={()=>this.setState({imgSrc:prompt("New Image link:") || this.state.imgSrc})}/>
    <div className="comment">Click</div>
    </div>
   <div id="info">
    <p><div className="tag">Fullname:</div> <span onClick={()=>this.setState({fullName:prompt("fullName:") || this.state.fullName})} >{this.state.fullName}</span> <div className="comment">Click</div></p>
    <p  id="bio"><div className="tag">Bio:</div><span onClick={()=>this.setState({bio:prompt("bio:") || this.state.bio})}>{this.state.bio}</span> <div className="comment">Click</div></p>
    <p><div className="tag">Profession:</div><span onClick={()=>this.setState({profession:prompt("profession:") || this.state.profession})}>{this.state.profession}</span>  <div className="comment">Click</div></p>
  
    </div>
    <button>Next</button> 
    </div>
      )  }
        
      </div>
    )
  }
}



