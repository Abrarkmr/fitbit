import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

function HomePage() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness app for logging activity, building teams,
            and surfacing a competitive leaderboard.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary" href="http://localhost:8000/api/health">
              Check API Health
            </a>
            <a className="btn btn-outline-secondary" href="https://react.dev/" target="_blank" rel="noreferrer">
              Learn React 19
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">What’s included</h2>
              <ul className="mb-0">
                <li>Activity tracking</li>
                <li>Team management</li>
                <li>Leaderboard insights</li>
                <li>Workout recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LeaderboardPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-3">Leaderboard</h2>
      <p className="text-muted">Stay motivated with a live view of your team and personal progress.</p>
      <div className="list-group">
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <span>Nova Squad</span>
          <span className="badge bg-primary rounded-pill">1,240 pts</span>
        </div>
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <span>Peak Pals</span>
          <span className="badge bg-secondary rounded-pill">1,092 pts</span>
        </div>
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <span>Iron Circle</span>
          <span className="badge bg-success rounded-pill">987 pts</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">OctoFit</a>
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/leaderboard">
              Leaderboard
            </NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
