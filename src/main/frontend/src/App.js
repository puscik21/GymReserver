import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const UserProfiles = () => {
    const [userProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/user')
        .then(res => {
          console.log(res);
          setUserProfiles(res.data);
        });
  }

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return userProfiles.map((userProfile, index) => {
      return (
          <div key={index}>
              <h1>{userProfile.name}</h1>
              <p>{userProfile.id}</p>
              <p>{userProfile.surname}</p>
              <p>{userProfile.createDate}</p>
          </div>
      )
  })
}

function App() {
  return (
    <div className="App">
      <UserProfiles />
    </div>
  );
}

export default App;
