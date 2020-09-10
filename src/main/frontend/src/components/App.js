import React from 'react';
import '../styles/App.css'
import {Container} from 'react-bootstrap'
import TrainersPage from "../pages/TrainersPage";

function App() {
  return (
      <Container>
        <div className="App">
            {/*TODO in future page based on logged user*/}
            <TrainersPage />
        </div>
      </Container>
  );
}

export default App