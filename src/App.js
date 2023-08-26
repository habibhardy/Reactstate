import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "A brief description about me.",
      imgSrc: "profile-image.jpg",
      profession: "Software Developer",
    },
    show: false,
  };


  toggleProfile = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {this.state.show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
   
      </div>
    );
  }
}

export default App;