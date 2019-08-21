import React from 'react';
import '../App.css';

class Navbar extends React.Component {
  constructor(){
    super()
  }

  render(){
      let isActive = (n) => {
        if (this.props.currentPage === n){
        return {color: 'whitesmoke'}
        }
        else return {}
        }
  return (
      <div className="navbar">
      <ul>
        <img src="./SeanFradlLogoWhite.png"></img>
        <li style={isActive(0)} onClick={() => this.props.swapPage(0)}>Home</li>
        <li style={isActive(1)} onClick={() => this.props.swapPage(1)}>Blog</li>
        <li style={isActive(2)} onClick={() => this.props.swapPage(2)}>Projects</li>
        <li style={isActive(3)} onClick={() => this.props.swapPage(3)}>About</li>
        <li style={isActive(4)} onClick={() => this.props.swapPage(4)}>Contact</li>
      </ul>
      </div>
  );
}
}

export default Navbar;
