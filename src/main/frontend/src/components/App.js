import React from 'react';
import '../styles/App.css'
import {Container} from 'react-bootstrap'
import UserPage from "../pages/UserPage";

function App() {
  return (
      <Container>
        <div className="App">
            {/*TODO in future page based on logged user*/}
            <UserPage />
        </div>
      </Container>
  );
}

export default App
