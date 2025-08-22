
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#activities">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="#teams">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="#leaderboard">Leaderboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#workouts">Workouts</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-body text-center">
                <img src={logo} className="App-logo mb-3" alt="logo" />
                <h1 className="card-title display-4 mb-3">Welcome to Octofit Tracker</h1>
                <p className="card-text lead">Track your fitness activities, join teams, compete on the leaderboard, and get personalized workouts!</p>
                <a className="btn btn-primary btn-lg" href="#activities">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center mt-5 mb-3">
        <a className="btn btn-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </footer>
    </div>
  );
}

export default App;
