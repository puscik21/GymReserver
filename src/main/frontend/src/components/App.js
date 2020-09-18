import React from 'react';
import '../styles/App.css'
import {Container} from 'react-bootstrap'
import TrainersPage from "./TrainersPage";

function App() {
  return (
      <Container>
        <div className="App">
            <TrainersPage />
        </div>
      </Container>
  );
}

export default App
